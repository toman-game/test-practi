import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    car: {
        width: '43px',
        height: '43px',

    },
    carName: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'red',
        padding: '0 4px 1px 4px',
        margin: '-27px 0 0 0',
        fontSize: '12px'
    }
}));

export default useStyles;
