import React, {memo, useContext} from 'react';
import map from "lodash/map";
import clsx from 'clsx';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import useStyles from './styles';
import {AppContext} from "../../providers/app";
import Car from "../Car";


const CarsList = () => {
    const styles = useStyles();
    const {cars, visibleCarsNames, selectedCar, setSelectedCar} = useContext(AppContext);

    return (
        <div className={styles.root}>
            {map(cars, (item, name) => {
                const isVisible = visibleCarsNames[name];
                const isSelected = selectedCar === name;
                return (
                    <Grid
                        key={name}
                        container
                        className={clsx(styles.line, !isVisible && styles.disabled)}
                        justify='space-evenly'
                    >
                        <Car name={name} />
                        {isSelected ? (
                            <Button
                                color='secondary'
                                variant='outlined'
                                onClick={() => setSelectedCar('')}
                            >
                                clear
                            </Button>
                        ) : (
                            <Button
                                color='secondary'
                                variant='contained'
                                onClick={() => setSelectedCar(name)}
                            >
                                find
                            </Button>
                        )}
                    </Grid>
                );
            })}
        </div>
    );
};

export default memo(CarsList);
