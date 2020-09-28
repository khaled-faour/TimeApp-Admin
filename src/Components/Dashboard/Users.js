import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link as RouterLink, useLocation } from 'react-router-dom'
import 'firebase/functions';
import { useFirebaseApp } from 'reactfire';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));


const Users = ({ numberOfUsers = null }) => {
    const firebase = useFirebaseApp();

    const classes = useStyles();
    const location = useLocation();
    const users = [];
    const [usersList, setUsersList] = useState([]);
    const [url, setUrl] = useState("http://localhost:5000/timetracker-cf86b/us-central1/getAllUsers");

    const getCategories = async () => {
        const listCategories = await firebase.functions().httpsCallable();
        listCategories().then(result => {
            console.log(result.data);
        })
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await fetch(url);
                const data = await result.json();

                await setUsersList(data);
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        };
        fetchUsers();
        getCategories();
    }, []);








    return (
        <React.Fragment>
            {numberOfUsers === null ?
                <h3>All Users</h3> :
                <h3>Last {numberOfUsers} Users</h3>
            }
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Last Sign In</TableCell>
                        <TableCell>Created</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersList.length == 0 ?

                        <TableRow>
                            <TableCell key="CircularProgress">
                                <p>Loading users list...</p>
                            </TableCell>
                        </TableRow>
                        : usersList.slice(
                            Math.max(
                                usersList.length - (numberOfUsers == null ? usersList.length : numberOfUsers), 0
                            )
                        )
                            .map(user => (
                                <TableRow key={user.uid}>
                                    <TableCell>{user.displayName}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.metadata.lastSignInTime}</TableCell>
                                    <TableCell>{user.metadata.creationTime}</TableCell>
                                </TableRow>
                            ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                {location.pathname === "/dashboard/users" ?
                    null :
                    <Link color="primary" component={RouterLink} to="/dashboard/users" >
                        More...
                    </Link>
                }

            </div>
        </React.Fragment >
    );
}

export default Users;