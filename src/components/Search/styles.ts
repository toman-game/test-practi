import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
        padding: '2px 6px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginRight: '15px'
    },
    input: {
        marginLeft: '4px',
        flex: 1,
    },
    iconButton: {
        padding: 10,
        marginRight: '12px',
        color: 'black'
    },
}));

export default useStyles;
