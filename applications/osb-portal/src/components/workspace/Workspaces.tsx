import * as React from "react";
import debounce from "lodash/debounce";

import { makeStyles } from "@mui/styles";

//components
import { Chip, Grid, Tabs, Box, Tab, Typography } from "@mui/material";

//icons
import CircularProgress from "@mui/material/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";

import { WorkspaceCard } from "..";
import { Workspace } from "../../types/workspace";
import WorkspacesSearch from "./WorkspacesSearch";
import workspaceService from "../../service/WorkspaceService";

import { bgLightest as lineColor } from "../../theme";
import SearchReposWorkspaces from "../common/SearchReposWorkspaces";
import { useState } from "react";
import searchFilter from "../../types/searchFilter";
import RepositoryService from "../../service/RepositoryService";
import { OSBRepository } from "../../apiclient/workspaces";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxHeight: "calc(100% - 55px) !important",
    "& .scrollbar": {
      "& .infinite-scroll-component__outerdiv": {
        "& .infinite-scroll-component": {
          overflow: "hidden !important",
        },
      },
    },
  },
  tab: {
    maxWidth: "33%",
    minWidth: "fit-content",
    padding: "16px 24px",
  },
  tabTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiTypography-root": {
      fontSize: "0.857rem",
      fontWeight: 700,
    },
  },
}));

export enum WorkspaceSelection {
  USER,
  PUBLIC,
  FEATURED,
}
let firstTimeFiltering = true;
// TODO handle user's vs public workspaces
export const Workspaces = ({ user, counter }: any) => {
  const [workspaces, setWorkspaces] = React.useState<Workspace[]>();
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(null);
  const [totalPages, setTotalPages] = React.useState(0);

  const [searchFilterValues, setSearchFilterValues] = useState<searchFilter>({
    text: undefined,
    tags: [],
    types: [],
  });

  const [error, setError] = React.useState<boolean>(false);

  // need to use useRef because if these are stored as states, they get
  // reinitialised each time the function component re-renders.
  const selection = React.useRef<WorkspaceSelection>(
    user ? WorkspaceSelection.USER : WorkspaceSelection.FEATURED
  );

  const isPublic = selection.current === WorkspaceSelection.PUBLIC;
  const isFeatured = selection.current === WorkspaceSelection.FEATURED;

  const classes = useStyles();

  //change workspaces tabs
  function changeSelection(newSelection: WorkspaceSelection) {
    setPage(1);
    setWorkspaces([]);
    setTotalPages(0);
    setTotal(0);
    selection.current = newSelection;
  }

  const handleChange = (
    event: React.ChangeEvent<{}>,
    tabSelected: WorkspaceSelection
  ) => {
    changeSelection(tabSelected);
  };

  const debouncedHandleSearchFilter = React.useCallback(
    debounce((newTextFilter: string) => {
      setSearchFilterValues({ ...searchFilterValues, text: newTextFilter });
    }, 500),
    []
  );

  const fetchMoreWorkspaces = () => {
    showMore();
  };

  const showMore = () => {
    setPage(page + 1);
  };

  React.useEffect(() => {
    if (error === true) {
      throw new Error("Error loading workspaces.");
    }
  }, [error]);

  React.useEffect(() => {
    if (
      searchFilterValues.tags.length === 0 &&
      searchFilterValues.types.length === 0 &&
      (typeof searchFilterValues.text === "undefined" ||
        searchFilterValues.text === "")
    ) {
      workspaceService
        .fetchWorkspaces(isPublic, isFeatured, page)
        .then((workspacesDetails) => {
          setWorkspaces(workspacesDetails.items);
          setTotal(workspacesDetails.total);
        });
    } else {
      workspaceService
        .fetchWorkspacesByFilter(isPublic, isFeatured, page, searchFilterValues)
        .then((workspacesDetails) => {
          setWorkspaces(workspacesDetails.items);
          setTotal(workspacesDetails.total);
        });
    }
  }, [page, searchFilterValues, selection.current]);

  const workspaceList = workspaces
    ? workspaces.map((workspace: Workspace, index: number) => {
        return (
          <Grid item={true} key={index} xs={6} sm={4} md={4} lg={3} xl={2}>
            <WorkspaceCard workspace={workspace} />
          </Grid>
        );
      })
    : [];

  return (
    <>
      <Box borderBottom={`2px solid ${lineColor}`} pr="1.714rem">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Grid container={true} alignItems="center" className="verticalFill">
            <Grid
              item={true}
              xs={12}
              sm={12}
              md={8}
              lg={8}
              className="verticalFill"
            >
              <Tabs
                value={selection.current}
                textColor="primary"
                indicatorColor="primary"
                onChange={handleChange}
              >
                {user ? (
                  <Tab
                    id="your-all-workspaces-tab"
                    value={WorkspaceSelection.USER}
                    className={classes.tab}
                    label={
                      user.isAdmin ? (
                        <div className={classes.tabTitle}>
                          <Typography>All workspaces</Typography>
                          {selection.current === WorkspaceSelection.USER && (
                            <Chip size="small" color="primary" label={total} />
                          )}
                        </div>
                      ) : (
                        <div className={classes.tabTitle}>
                          <Typography>Your workspaces</Typography>
                          {selection.current === WorkspaceSelection.USER && (
                            <Chip size="small" color="primary" label={total} />
                          )}
                        </div>
                      )
                    }
                  />
                ) : null}
                <Tab
                  id="featured-tab"
                  value={WorkspaceSelection.FEATURED}
                  className={classes.tab}
                  label={
                    <div className={classes.tabTitle}>
                      <Typography>Featured workspaces</Typography>
                      {selection.current === WorkspaceSelection.FEATURED && (
                        <Chip size="small" color="primary" label={total} />
                      )}
                    </div>
                  }
                />
                <Tab
                  id="public-tab"
                  value={WorkspaceSelection.PUBLIC}
                  className={classes.tab}
                  label={
                    <div className={classes.tabTitle}>
                      <Typography>Public workspaces</Typography>
                      {selection.current === WorkspaceSelection.PUBLIC && (
                        <Chip size="small" color="primary" label={total} />
                      )}
                    </div>
                  }
                />
              </Tabs>
            </Grid>
            <Grid
              item={true}
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className="verticalFill"
            >
              <SearchReposWorkspaces
                filterChanged={(newTextFilter) =>
                  debouncedHandleSearchFilter(newTextFilter)
                }
                searchFilterValues={searchFilterValues}
                setSearchFilterValues={setSearchFilterValues}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {!workspaces && (
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
      )}

      {workspaces && (
        <Box
          className={`verticalFit card-container ${classes.cardContainer}`}
          px={4}
          py={4}
        >
          <Box pb={1} className="scrollbar" id="workspace-box">
            <InfiniteScroll
              dataLength={workspaceList.length}
              next={fetchMoreWorkspaces}
              hasMore={page < totalPages}
              loader={
                <Box
                  display="flex"
                  flex={1}
                  px={2}
                  py={2}
                  justifyContent="center"
                  width="100%"
                >
                  <CircularProgress />
                </Box>
              }
              scrollableTarget="workspace-box"
            >
              <Grid container={true} spacing={1}>
                {workspaceList}
              </Grid>
            </InfiniteScroll>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Workspaces;
