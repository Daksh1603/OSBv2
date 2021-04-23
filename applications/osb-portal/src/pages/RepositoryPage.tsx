import * as React from "react";
import Divider from "@material-ui/core/Divider";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import CircularProgress from "@material-ui/core/CircularProgress";

import { OSBRepository } from "../apiclient/workspaces";
import RepositoryService from "../service/RepositoryService";

// import workspaceService from "../../service/WorkspaceService";
// import { Workspace } from "../../types/workspace";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FolderIcon from "@material-ui/icons/Folder";

import {
  bgRegular,
  linkColor,
  primaryColor,
  bgLightest,
  fontColor,
  bgDarkest,
  checkBox,
  paragraph,
  bgLightestShade,
  bgInputs,
} from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: bgDarkest,
    "& .MuiCheckbox-colorSecondary": {
      color: checkBox,
      "&.Mui-checked": {
        color: linkColor,
      },
    },
    "& .scrollbar": {
      paddingRight: 0,
      marginTop: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        maxHeight: "calc(100vh - 19.5rem)",
      },
    },
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 4.906rem)",
    },
    "& .main-content": {
      padding: theme.spacing(3),
      overflow: "auto",

      [theme.breakpoints.up("sm")]: {
        height: "calc(100% - 4.063rem)",
      },
      "& .MuiTextField-root": {
        borderRadius: 4,
        marginTop: theme.spacing(2),
        backgroundColor: bgLightestShade,
        padding: theme.spacing(2),
        "& .MuiSvgIcon-root": {
          width: "1.25rem",
          borderRadius: 0,
          color: paragraph,
          height: "auto",
        },
        "& .MuiInput-root": {
          "&:before": {
            display: "none",
          },
          "&:after": {
            display: "none",
          },
        },
        "& .MuiInputBase-input": {
          padding: theme.spacing(0),
          fontSize: ".88rem",
        },
      },
      "& .MuiListItemIcon-root": {
        minWidth: 1,
      },
      "& .MuiListItemText-root": {
        margin: 0,
      },
      "& .MuiList-root": {
        padding: 0,
        marginTop: theme.spacing(0),
        "& .flex-grow-1": {
          borderBottom: `1px solid ${bgRegular}`,
          borderTop: `1px solid ${bgRegular}`,
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          marginLeft: theme.spacing(2),
        },
        "& p": {
          fontSize: ".913rem",
          display: "flex",
          alignItems: "flex-end",
          color: fontColor,
          "& span": {
            fontSize: ".913rem",
            color: bgInputs,
          },
        },
        "& strong": {
          fontSize: ".793rem",
          fontWeight: "bold",
          color: bgInputs,
        },
        "& .icon": {
          width: "2rem",
          display: "flex",
          "&.file": {
            "& .MuiSvgIcon-root": {
              color: bgInputs,
            },
          },
          "& .MuiSvgIcon-root": {
            color: linkColor,
          },
        },
        "& .MuiAvatar-root": {
          width: "1.5rem",
          borderRadius: 0,
          height: "auto",
        },
        "& .MuiIconButton-root": {
          margin: 0,
          padding: 0,
        },
        "& .MuiListItem-root": {
          borderRadius: 4,
          padding: 0,
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          "&:first-child": {
            "& .flex-grow-1": {
              borderTop: 0,
            },
          },
          "&:last-child": {
            "& .flex-grow-1": {
              borderBottomWidth: 2,
            },
          },
          "&:hover": {
            backgroundColor: bgLightest,
          },
        },
      },
      "& .MuiBreadcrumbs-ol": {
        lineHeight: 1,
        "& .MuiAvatar-root": {
          width: "auto",
          borderRadius: 0,
          height: "auto",
        },
        "& .MuiBreadcrumbs-separator": {
          fontSize: ".693rem",
          lineHeight: 1,
          color: paragraph,
          fontWeight: "bold",
        },
        "& .MuiBreadcrumbs-li": {
          lineHeight: 1,
          "& .MuiTypography-root": {
            fontSize: ".693rem",
            fontWeight: "bold",
            color: paragraph,
            lineHeight: 1,
          },
          "& .MuiLink-root": {
            fontSize: ".693rem",
            lineHeight: 1,
            fontWeight: "bold",
            display: "block",
            color: bgInputs,
            cursor: "pointer",
          },
        },
      },
      "& .flex-grow-1": {
        flexGrow: 1,
      },
      "& .preview-box": {
        borderRadius: 2,
        boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.25)",
        border: `1px solid ${paragraph}`,
        minHeight: "15rem",
        backgroundColor: fontColor,
        overflow: "auto",
        [theme.breakpoints.up("sm")]: {
          height: "calc(100vh - 14.5rem)",
        },
      },
      "& .primary-heading": {
        borderBottom: `3px solid ${bgInputs}`,
        fontSize: ".88rem",
        fontWeight: "bold",
        marginBottom: theme.spacing(2),
        lineHeight: "1.25rem",
        paddingBottom: theme.spacing(1),
      },
    },
    "& .subheader": {
      display: "flex",
      background: bgLightest,
      alignItems: "center",
      height: "4.062rem",
      justifyContent: "space-between",
      "& .MuiSvgIcon-root": {
        width: "1rem",
        marginRight: theme.spacing(1),
        height: "auto",
        cursor: "pointer",
      },

      "& h1": {
        fontSize: ".88rem",
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        "& span": {
          fontSize: ".88rem",
          lineHeight: 1,
          fontWeight: "bold",
          "&:not(:last-child)": {
            cursor: "pointer",
            fontWeight: "normal",
            marginRight: ".5rem",
            "&:after": {
              content: '"/"',
              display: "inline-block",
              paddingLeft: ".5rem",
            },
          },
          "&:first-child": {
            color: fontColor,
          },
        },
      },
      "& .MuiButton-contained": {
        [theme.breakpoints.down("xs")]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
        [theme.breakpoints.down("sm")]: {
          minWidth: "2.25rem",
        },
        [theme.breakpoints.up("sm")]: {
          minWidth: "11.5rem",
          "& .MuiSvgIcon-root": {
            display: "none",
          },
        },
        "&:hover": {
          "& .MuiButton-label": {
            color: primaryColor,
          },
        },
        "& .MuiButton-label": {
          color: fontColor,
          [theme.breakpoints.down("xs")]: {
            fontSize: 0,
          },
        },
      },
    },
  },
}));

export const RepositoryPage = (props: any) => {
  const { repositoryId } = useParams<{ repositoryId: string }>();
  const history = useHistory();
  const [repository, setRepository] = React.useState<OSBRepository>();

  RepositoryService.getRepository(+repositoryId).then((repo) =>
    setRepository(repo)
  );

  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  function handleClick(event: any) {
    event.preventDefault();
  }

  return (
    <>
      <Box className={classes.root}>
        <Box className="subheader" paddingX={3} justifyContent="space-between">
          <Box>
            <Box display="flex" alignItems="center">
              <ArrowBackIcon onClick={() => history.goBack()} />
              <Typography component="h1" color="primary">
                <Typography component="span" onClick={() => history.goBack()}>All repositories</Typography>
                <Typography component="span">NWB Showcase</Typography>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button variant="contained" disableElevation color="primary">
              <AddIcon />
              create new workspace
            </Button>
          </Box>
        </Box>

        <Box className="main-content">
          <Grid container className="row" spacing={5}>
            <Grid item xs={12} md={6}>
              <Box className="flex-grow-1">
                <Typography component="h3" className="primary-heading">
                  Preview
                </Typography>

                <Box className="preview-box"></Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="flex-grow-1">
                <Typography component="h3" className="primary-heading">
                  Resources
                </Typography>

                {/* {repository ?  */}
                  <>
                    <Breadcrumbs
                      separator={<Avatar src="/images/separator.svg" />}
                      aria-label="breadcrumb"
                    >
                      <Link color="inherit">
                        OpenSourceBrain
                      </Link>
                      <Link
                        color="inherit"
                      >
                        NWBShowcase
                      </Link>
                      <Typography color="textPrimary">FergusonEtAl2015</Typography>
                    </Breadcrumbs>
                    <TextField
                      id="standard-start-adornment"
                      fullWidth
                      placeholder="Search"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box className="scrollbar">
                      <List>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => {
                          const labelId = `checkbox-list-label-${value}`;
                          const classesForIcons = index%2 === 0 ? 'icon': 'icon file';
                          return (
                            <ListItem
                              key={value}
                              role={undefined}
                              dense
                              button
                              onClick={handleToggle(value)}
                            >
                              <ListItemIcon>
                                <Checkbox
                                  edge="start"
                                  checked={checked.indexOf(value) !== -1}
                                  tabIndex={-1}
                                  disableRipple
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              </ListItemIcon>
                              <Box
                                className="flex-grow-1"
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Box display="flex" alignItems="center">
                                  {/* <Box className="icon">
                                    <FolderIcon />
                                  </Box> */}
                                  <Box className={classesForIcons}>
                                  {index%2 === 0 ? <FolderIcon /> : <InsertDriveFileIcon />}
                                  </Box>
                                  <Typography component="p">
                                    FergusonEtAl2015
                                    <Typography component="span">.nwb</Typography>
                                  </Typography>
                                </Box>
                                <Typography component="strong">
                                  6 months ago
                                </Typography>
                              </Box>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Box>
                  </> 
                  {/* : (
                    <CircularProgress
                      size={48}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginTop: -24,
                        marginLeft: -24,
                      }}
                    />
                )} */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default RepositoryPage;
