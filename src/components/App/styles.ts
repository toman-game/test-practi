import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
        padding: '50px 80px',
        width: '100vw',
        boxSizing: 'border-box'
    },
    content: {
        width: '100%',
        height: '600px',
        paddingTop: '20px',
        opacity: 0.6
    }
}));

export default useStyles;
