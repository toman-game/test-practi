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
        transition: 'top 15s linear, left 15s linear',
        position: 'absolute',
        width: '60px',
        height: '60px',
        padding: '6px',
        boxSizing: 'border-box',
        borderRadius: '4px'
    }
}));

export default useStyles;
