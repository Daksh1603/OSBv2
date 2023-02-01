import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import OSBErrorBoundary from "./components/handlers/OSBErrorBoundary";
import theme from "./theme";
import SidebarPageLayout from "./layouts/SidebarLayout";

import {
  Header,
  AboutDialog,
  WorkspaceOpenPage,
  ProtectedRoute,
  RepositoryPage,
  WorkspacePage,
  UserPage,
  RepositoriesPage,
  HomePage,
} from "./components";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const useStyles = makeStyles(() => ({
  mainContainer: {
    overflow: "auto",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      overflow: "hidden",
    },
  },
}));

export const App = (props: any) => {
  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <OSBErrorBoundary>
          <CssBaseline />
          <AboutDialog />
          {!props.error && (
            <Router>
              <div className={classes.mainContainer}>
                <div id="header">
                  <Header />
                </div>

                <OSBErrorBoundary>
                  <Switch>
                    <Route exact={true} path="/">
                      <SidebarPageLayout>
                        <HomePage />
                      </SidebarPageLayout>
                    </Route>
                    <Route exact={true} path="/workspace/:workspaceId">
                      <SidebarPageLayout>
                        <WorkspacePage />
                      </SidebarPageLayout>
                    </Route>
                    <ProtectedRoute
                      exact={true}
                      path="/workspace/open/:workspaceId/:app"
                    >
                      <WorkspaceOpenPage />
                    </ProtectedRoute>
                    <ProtectedRoute
                      exact={true}
                      path="/workspace/open/:workspaceId"
                    >
                      <WorkspaceOpenPage />
                    </ProtectedRoute>
                    <Route exact={true} path="/repositories">
                      <SidebarPageLayout>
                        <RepositoriesPage />
                      </SidebarPageLayout>
                    </Route>
                    <Route exact={true} path="/repositories/:repositoryId">
                      <SidebarPageLayout>
                        <RepositoryPage />
                      </SidebarPageLayout>
                    </Route>
                    <Route exact={true} path="/user/:userId">
                      <SidebarPageLayout>
                        <UserPage />
                      </SidebarPageLayout>
                    </Route>
                  </Switch>
                </OSBErrorBoundary>
              </div>
            </Router>
          )}
        </OSBErrorBoundary>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
