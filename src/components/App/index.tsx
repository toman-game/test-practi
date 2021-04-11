import React from 'react';
import Grid from "@material-ui/core/Grid";

import useSocketListen from "../../socket/useSocketListen";
import { AppProvider } from "../../providers/app";
import Sidebar from "../Sidebar";
import Map from "../Map";
import useStyles from "./styles";

const AppInner = () => {
    const styles = useStyles();
    useSocketListen();

    return (
        <div className={styles.root}>
            <h1>
                Dror Birenbaum: Home test for Practi
            </h1>
            <Grid container className={styles.content}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs>
                    <Map />
                </Grid>
            </Grid>
        </div>
    );
}

const App = () => {
    return (
        <AppProvider>
            <AppInner />
        </AppProvider>
    )
}

export default App;