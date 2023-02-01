import * as React from "react";
import { useHistory } from "react-router-dom";

// components
import Chip from "@mui/material/Chip";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Tooltip from "@mui/material/Tooltip";

import CircularProgress from "@mui/material/CircularProgress";
import ShowMoreText from "react-show-more-text";
import { StyledContextChip } from "./RepositoriesCards";

// style
import {
  paragraph,
  linkColor,
  chipTextColor,
  chipBg,
  secondaryColor,
  primaryColor,
} from "../../theme";
import styled from "@mui/system/styled";

// icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { CodeBranchIcon } from "../../components/icons";

//types
import {
  OSBRepository,
  RepositoryContentType,
  Tag,
} from "../../apiclient/workspaces";
import { UserInfo } from "../../types/user";
import searchFilter from "../../types/searchFilter";

interface RepositoriesProps {
  repositories: OSBRepository[];
  handleRepositoryClick: (repository: OSBRepository) => void;
  handleTagClick?: (tagObject: Tag) => void;
  handleTagUnclick?: (tagObject: Tag) => void;
  handleTypeClick?: (type: string) => void;
  handleTypeUnclick?: (type: string) => void;
  searchFilterValues?: searchFilter;
  user?: UserInfo;
  loading?: boolean;
}

export const StyledTableContainer = styled(TableContainer)(() => ({
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    width: 2,
    height: 2,
  },
  "& .MuiChip-root": {
    backgroundColor: chipBg,
  },
  "& .content-types-tag": {
    color: chipTextColor,
  },
 
  
}));

export const StyledShowMoreText = styled(ShowMoreText)(() => ({
  color: paragraph,
  marginTop: 8,
  display: "inline-block",
  fontSize: "0.857rem",
  "& a": {
    color: linkColor,
    display: "flex",
    textDecoration: "none",
    "& .MuiSvgIcon-root": {
      color: `${linkColor} !important`,
    },
  },
}));

export const RepositoriesList = (props: RepositoriesProps) => {
  const {
    repositories,
    handleTagClick,
    handleTypeClick,
    handleTypeUnclick,
    handleTagUnclick,
    loading,
    searchFilterValues,
    handleRepositoryClick,
  } = props;

  const history = useHistory();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const openRepoUrl = (uri: string) => window.open(uri, "_blank");

  return (
    <>
      {loading ? (
        <Box
          flex={1}
          px={2}
          py={2}
          display="flex"
          alignContent="center"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          className="verticalFill"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <StyledTableContainer>
            <Table aria-label="simple table">
              <TableBody>
                {repositories &&
                  repositories.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{ minWidth: 300, pl: 4 }}
                        component="th"
                        scope="row"
                      >
                        <Box
                          className="col"
                          sx={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography variant="h5" component="h2">{row.name}</Typography>
                          {row.summary && (
                            <StyledShowMoreText
                              lines={2}
                              more={
                                <>
                                  See more <ExpandMoreIcon />
                                </>
                              }
                              less={
                                <Typography >
                                  See less
                                  <ExpandLessIcon />
                                </Typography>
                              }
                              onClick={handleExpandClick}
                              expanded={expanded}
                              width={400}
                            >
                              {row.summary}
                            </StyledShowMoreText>
                          )}
                        </Box>
                      </TableCell>
                      <TableCell style={{ minWidth: 150 }}>
                        <Button
                          sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textTransform: "capitalize",
                            color: chipTextColor,
                          }}
                          onClick={() => history.push(`/user/${row?.user?.id}`)}
                        >
                          {row.user.username}
                        </Button>
                      </TableCell>
                      <TableCell style={{ minWidth: 100 }}>
                        <Button
                          sx={{
                            textTransform: "capitalize",
                            "&:hover": { backgroundColor: "transparent" },
                          }}
                          endIcon={<OpenInNewIcon />}
                          onClick={() => openRepoUrl(row.uri)}
                        >
                          {row.repositoryType}
                        </Button>
                      </TableCell>
                      <TableCell style={{ minWidth: 200 }}>
                        <Box>
                          {row.contentTypes.split(",").map((type) => (
                            <Chip
                              avatar={
                                <FiberManualRecordIcon
                                  color={
                                    type === RepositoryContentType.Experimental
                                      ? "primary"
                                      : "secondary"
                                  }
                                />
                              }
                              onClick={() => handleTypeClick(type)}
                              key={type}
                              label={type}
                              clickable={true}
                              className="content-types-tag"
                              onDelete={
                                searchFilterValues?.types?.includes(type)
                                  ? () => handleTypeUnclick(type)
                                  : null
                              }
                              sx={{
                                margin:
                                  row.tags?.length > 0 ||
                                  row.contentTypes.split(",")?.length > 1
                                    ? "0 8px 8px 0"
                                    : 0,
                              }}
                            />
                          ))}
                        </Box>
                        <Box>
                          {row.tags.map((tagObject) => (
                            <Chip
                              className="repo-tag"
                              onClick={() => handleTagClick(tagObject)}
                              key={tagObject.id}
                              label={tagObject.tag}
                              clickable={true}
                              onDelete={
                                searchFilterValues?.tags?.includes(
                                  tagObject.tag
                                )
                                  ? () => handleTagUnclick(tagObject)
                                  : null
                              }
                              sx={{
                                margin:
                                  row.tags?.length > 1 ? "0 8px 8px 0" : 0,
                              }}
                            />
                          ))}
                        </Box>
                      </TableCell>
                      <TableCell style={{ minWidth: 100 }}>
                        <Tooltip
                          title={
                            <span style={{ textTransform: "capitalize" }}>
                              {row.defaultContext}
                            </span>
                          }
                        >
                          <StyledContextChip
                            icon={
                              <CodeBranchIcon sx={{ fontSize: ".857rem" }} />
                            }
                            label={row.defaultContext}
                          />
                        </Tooltip>
                      </TableCell>
                      <TableCell sx={{ width: "12em", pr: 4, textAlign: "right" }}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleRepositoryClick(row)}
                        >
                          Open Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
        </Box>
      )}
    </>
  );
};

export default RepositoriesList;
