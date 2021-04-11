import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
        padding: '30px 50px',
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
