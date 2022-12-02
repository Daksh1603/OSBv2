import * as React from "react";

//components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import {
    HomePageSider,
} from "../../components";

import Repositories from "./Respositories";
//style
import makeStyles from '@mui/styles/makeStyles';

//types
import {UserInfo} from "../../types/user";

const useStyles = makeStyles((theme) => ({}));

export const RepositoriesPage = ({ user }: { user: UserInfo }) => {
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
                            <div id="workspaces-list" className="verticalFit">
                                <Repositories user={user} />
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default RepositoriesPage
