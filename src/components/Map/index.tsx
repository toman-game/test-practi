import React, {memo, useContext} from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import map from 'lodash/map';

import {AppContext} from "../../providers/app";
import useStyles from './styles';

const toPresent = (pos: number) => {
    const present = Math.min(pos*100, 94);
    return present + '%';
}

const Map = () => {
    const styles = useStyles();
    const {cars} = useContext(AppContext);

    return (
        <div className={styles.root}>
            <CardMedia image='https://ik.imagekit.io/phoxhbb1kvy/map_image2_g8faoT2xE.png' className={styles.map} />
            {map(cars, (item, name) => (
                <div
                    key={name}
                    style={{
                        top: toPresent(item.posX),
                        left:  toPresent(item.posY),
                        transition: 'all 15s linear',
                        position: 'absolute',
                    }}
                >
                    <CardMedia
                        className={styles.car}
                        image='https://ik.imagekit.io/phoxhbb1kvy/carImg_1__tKe5fQokTy.png'
                    />
                    <p className={styles.carName}>{name}</p>
                </div>
            ))}
        </div>

    );
};

export default memo(Map);



/**
 * if you want all the cars to be at the same speed you could use this code:
 * the duration will later be used in css-transition
 *   **/
        // const newCars: carsTS = {};
        // carsNames.forEach((name)=> {
        //     const posX = Math.random();
        //     const posY = Math.random();
        //     const oldCar = cars[name];
        //     if (oldCar) {
        //         const {posX: oldX, posY: oldY} = oldCar;
        //         const distance = Math.hypot(posX-oldX, posY-oldY);
        //         newCars[name] = {
        //             posX,
        //             posY,
        //             duration: distance * 15
        //         }
        //     } else {
        //         newCars[name] = {
        //             posX,
        //             posY,
        //             duration: 0
        //         }
        //     }
        // })
        // setCars(newCars)

