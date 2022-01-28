import { createUseStyles as Styles } from 'react-jss';

const appStyles = Styles({
    button: {
        border: 'solid 2px black',
        width: 'fit-content',
        padding: '10px',
        boxShadow: '5px 5px 5px',
        cursor: 'pointer',
        marginBottom: '20px',
        '&:active': {
            boxShadow: 'none',
            transform: 'translateY(5px)'
        }
    }
});

export default appStyles;
