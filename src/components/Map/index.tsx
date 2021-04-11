import React, {memo, useContext} from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import map from 'lodash/map';

import {AppContext} from "../../providers/app";
import Car from "../Car";
import useStyles from './styles';


const toPresent = (pos: number) => {
    const present = Math.min(pos * 100, 94);
    return present + '%';
}

const Map = () => {
    const styles = useStyles();
    const {cars, visibleCarsNames, selectedCar} = useContext(AppContext);

    return (
        <div className={styles.root}>
            <CardMedia image='https://ik.imagekit.io/phoxhbb1kvy/map_image2_g8faoT2xE.png' className={styles.map} />
            {map(cars, (item, name) => {
                const isVisible = visibleCarsNames[name];
                const isSelected = isVisible && selectedCar === name;

                return (
                    <div
                        key={name}
                        className={styles.car}
                        style={{
                            top: toPresent(item.posX),
                            left: toPresent(item.posY),
                            border: isSelected? '3px solid red' : 'none'
                        }}
                    >
                        <div style={{display: isVisible ? 'initial' : 'none'}}>
                            <Car name={name} />
                        </div>
                    </div>
                )
            })}
        </div>

    );
};

export default memo(Map);

