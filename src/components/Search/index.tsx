import React, {memo, useContext} from 'react';
import { useFormik } from 'formik';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import {AppContext} from "../../providers/app";
import useStyles from './styles';

const Search = () => {
    const styles = useStyles();
    const { setUserSearch } = useContext(AppContext)

    const formik = useFormik({
        initialValues: { search: '' },
        onSubmit: (values) => {
            const search = values.search.toLowerCase();
            setUserSearch(search);
        },
    });


    return (
        // @ts-ignore
        <Paper component="form" className={styles.root} onSubmit={formik.handleSubmit}>
            <InputBase
                name='search'
                className={styles.input}
                placeholder="Search Car Name"
                value={formik.values.search}
                onChange={formik.handleChange}
            />
            <IconButton type="submit" className={styles.iconButton}   >
                <SearchIcon   />
            </IconButton>
        </Paper>
    );
};

export default memo(Search);
