import React from 'react';
import Grid from "@material-ui/core/Grid";

import useSocketListen from "../../socket/useSocketListen";
import { AppProvider } from "../../providers/app";

import Map from "../Map";
import Search from "../Search";
import CarsList from "../CarsList";
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
                <Grid item lg={2} md={3} xs={4}>
                    <Search />
                    <CarsList />
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