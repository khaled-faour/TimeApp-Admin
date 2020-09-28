import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Logout = () => {
    // Import firebase
    const firebase = useFirebaseApp();

    // Log out function
    const handleClick = () => {
        firebase.auth().signOut();
    }

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
        </>
    )
};
export default Logout;