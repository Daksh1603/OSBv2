import * as React from "react";

//components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { HomePageSider, Workspaces } from "../components";

//style
import makeStyles from "@mui/styles/makeStyles";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import WindowIcon from "@mui/icons-material/Window";
import ListIcon from "@mui/icons-material/List";
import SearchReposWorkspaces from "../components/common/SearchReposWorkspaces";
import RepositoriesTable from "./Repositories/RespositoriesTable";
import { OSBRepository, Tag } from "../apiclient/workspaces";
import RepositoriesCards from "./Repositories/RepositoriesCards";
import {
  StyledActiveIconButton,
  StyledGrid,
  StyledIconButton,
  StyledPagination,
  StyledTabs,
} from "./Repositories/RepositoriesPage";
import { Chip, Tab } from "@mui/material";
import {
  bgLightest as lineColor,
  bgRegular,
  checkBoxColor,
  bgDarker,
  linkColor,
  primaryColor,
} from "../theme";
import { WorkspaceSelection } from "../components/workspace/WorkspacesCards";
import { ReactElement } from "react";
import debounce from "lodash/debounce";
import searchFilter from "../types/searchFilter";
import workspaceService from "../service/WorkspaceService";
import WorkspacesCards from "../components/workspace/WorkspacesCards";

export const HomePage = (props: any) => {
  const [searchFilterValues, setSearchFilterValues] =
    React.useState<searchFilter>({
      text: undefined,
      tags: [],
      types: [],
    });

  const [workspaces, setWorkspaces] = React.useState<OSBRepository[]>([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [tabValue, setTabValue] = React.useState(
    props.user ? WorkspaceSelection.USER : WorkspaceSelection.FEATURED
  );
  const [listView, setListView] = React.useState<string>("grid");

  const isPublic = tabValue === WorkspaceSelection.PUBLIC;
  const isFeatured = tabValue === WorkspaceSelection.FEATURED;

  console.log(WorkspaceSelection);

  console.log(tabValue);

  const isSearchFieldsEmpty =
    searchFilterValues.tags.length === 0 &&
    searchFilterValues.types.length === 0 &&
    (typeof searchFilterValues.text === "undefined" ||
      searchFilterValues.text === "");

  const updateList = (newTabValue: WorkspaceSelection = tabValue) => {
    setWorkspaces(null);
    setTabValue(newTabValue);
    getWorkspacesList({ newTabValue });
  };

  const debouncedHandleSearchFilter = React.useCallback(
    debounce((newTextFilter: string) => {
      setSearchFilterValues({ ...searchFilterValues, text: newTextFilter });
    }, 500),
    []
  );

  const setWorkspacesValues = (workspacesDetails) => {
    setWorkspaces(workspacesDetails.items);
    setTotal(workspacesDetails.total);
    setTotalPages(workspacesDetails.totalPages);
    setLoading(false);
  };

  const getWorkspacesList = (payload?) => {
    setLoading(true);

    console.log({ isPublic, isFeatured });

    if (payload?.searchFilterValues) {
      workspaceService
        .fetchWorkspacesByFilter(isPublic, isFeatured, page, searchFilterValues)
        .then((workspacesDetails) => {
          setWorkspacesValues(workspacesDetails);
        });
    } else {
      workspaceService
        .fetchWorkspaces(isPublic, isFeatured, page)
        .then((workspacesDetails) => {
          setWorkspacesValues(workspacesDetails);
        });
    }
  };

  const handleTabChange = (event: any, newValue: WorkspaceSelection) => {
    setTotal(0);
    setTabValue(newValue);
  };

  const changeListView = (type: string) => {
    setListView(type);
  };

  const handleChangePage = (event: unknown, current: number) => {
    setPage(current);
  };

  const CustomButton = ({
    listType,
    Icon,
  }: {
    listType: string;
    Icon: ReactElement;
  }) => {
    if (listType === listView) {
      return (
        <StyledActiveIconButton onClick={() => changeListView(listType)}>
          {Icon}
        </StyledActiveIconButton>
      );
    } else {
      return (
        <StyledIconButton onClick={() => changeListView(listType)}>
          {Icon}
        </StyledIconButton>
      );
    }
  };
  React.useEffect(() => {
    if (isSearchFieldsEmpty) {
      getWorkspacesList();
    } else {
      getWorkspacesList({ searchFilterValues });
    }
  }, [page, searchFilterValues, tabValue]);

  return (
    <>
      <Box className="verticalFit">
        <Grid container={true} className="verticalFill">
          <Grid
            item={true}
            xs={12}
            sm={12}
            md={3}
            lg={2}
            direction="column"
            className="verticalFill"
          >
            <Box width={1} className="verticalFit">
              <HomePageSider />
            </Box>
          </Grid>
          <Grid
            item={true}
            xs={12}
            sm={12}
            md={9}
            lg={10}
            alignItems="stretch"
            className="verticalFill"
          >
            <Box width={1} className="verticalFit">
              <div id="repositories-list" className="verticalFit">
                <Box borderBottom={`1px solid ${lineColor}`} pr="1.3rem">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid
                      container={true}
                      alignItems="center"
                      className="verticalFill"
                      spacing={1}
                    >
                      <Grid
                        item={true}
                        xs={12}
                        sm={12}
                        md={7}
                        lg={7}
                        className="verticalFill"
                      >
                        <Tabs value={tabValue} onChange={handleTabChange}>
                          {props.user ? (
                            <StyledTabs
                              id="your-all-workspaces-tab"
                              value={WorkspaceSelection.USER}
                              label={
                                props.user.isAdmin ? (
                                  <div className="tabTitle">
                                    <Typography>All workspaces</Typography>
                                    {tabValue === WorkspaceSelection.USER && (
                                      <Chip
                                        size="small"
                                        color="primary"
                                        label={total}
                                      />
                                    )}
                                  </div>
                                ) : (
                                  <div className="tabTitle">
                                    <Typography>Your workspaces</Typography>
                                    {tabValue === WorkspaceSelection.USER && (
                                      <Chip
                                        size="small"
                                        color="primary"
                                        label={total}
                                      />
                                    )}
                                  </div>
                                )
                              }
                            />
                          ) : null}
                          <StyledTabs
                            id="featured-tab"
                            value={WorkspaceSelection.FEATURED}
                            label={
                              <div className="tabTitle">
                                <Typography>Featured workspaces</Typography>
                                {tabValue === WorkspaceSelection.FEATURED && (
                                  <Chip
                                    size="small"
                                    color="primary"
                                    label={total}
                                  />
                                )}
                              </div>
                            }
                          />
                          <StyledTabs
                            id="public-tab"
                            value={WorkspaceSelection.PUBLIC}
                            label={
                              <div className="tabTitle">
                                <Typography>Public workspaces</Typography>
                                {tabValue === WorkspaceSelection.PUBLIC && (
                                  <Chip
                                    size="small"
                                    color="primary"
                                    label={total}
                                  />
                                )}
                              </div>
                            }
                          />
                        </Tabs>
                      </Grid>
                      <StyledGrid item={true} xs={12} sm={8} md={5} lg={5}>
                        <ButtonGroup
                          sx={{
                            backgroundColor: bgRegular,
                            padding: "4px",
                            borderRadius: "8px",
                            marginRight: "0.571rem",
                          }}
                          disableElevation
                          variant="contained"
                          aria-label="Disabled elevation buttons"
                        >
                          <CustomButton Icon={<WindowIcon />} listType="grid" />
                          <CustomButton Icon={<ListIcon />} listType="list" />
                        </ButtonGroup>
                        <SearchReposWorkspaces
                          filterChanged={(newTextFilter) =>
                            debouncedHandleSearchFilter(newTextFilter)
                          }
                          searchFilterValues={searchFilterValues}
                          setSearchFilterValues={setSearchFilterValues}
                          hasTypes={true}
                          setLoading={setLoading}
                        />
                      </StyledGrid>
                    </Grid>
                  </Box>
                </Box>

                {listView === "grid" ? (
                  <WorkspacesCards workspaces={workspaces} loading={loading} />
                ) : (
                  <div>list</div>
                )}
              </div>
              {workspaces && (
                <StyledPagination
                  count={totalPages}
                  page={page}
                  onChange={handleChangePage}
                  showFirstButton
                  showLastButton
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
