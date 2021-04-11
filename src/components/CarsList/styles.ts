import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
        width: '100%',
        height: '100%'
    },
    line: {
        marginTop: '20px'
    },
    disabled: {
        filter: 'grayscale(100%)',
        pointerEvents: 'none'
    }
}));

export default useStyles;
