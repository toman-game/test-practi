import React, {memo} from 'react';
import CardMedia from "@material-ui/core/CardMedia";

import useStyles from './styles';

interface propsTS {
    name: string;
}

const Car = (props: propsTS) => {
    const styles = useStyles();
    const {name} = props;

    return (
        <div>
            <CardMedia
                className={styles.car}
                image='https://ik.imagekit.io/phoxhbb1kvy/carImg_1__tKe5fQokTy.png'
            />
            <p className={styles.carName}>
                {name}
            </p>
        </div>
    );
};

export default memo(Car);

