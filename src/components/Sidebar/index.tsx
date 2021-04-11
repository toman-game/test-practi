import React, { memo } from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import useStyles from './styles';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = () => {
    const styles = useStyles();

    return (
        <Grid container className={styles.root}>
            <Grid item xs={10}>
                <TextField label='Car name'  />
            </Grid>
            <Grid item xs={1}>
                <IconButton color='primary' >
                    <SearchIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default memo(Sidebar);
