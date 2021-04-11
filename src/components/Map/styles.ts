import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    map: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        position: 'absolute',
    },
    car: {
        width: '43px',
        height: '43px',

    },
    carName: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'red',
        padding: '0 4px 1px 4px',
        margin: '-30px 0 0 0',
        fontSize: '11px'
    }
}));

export default useStyles;
