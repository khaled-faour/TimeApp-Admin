import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import 'firebase/functions';
import { useFirebaseApp } from 'reactfire';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));


const Users = ({ numberOfUsers = 10 }) => {


    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'displayName', headerName: 'Display Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'creationTime', headerName: 'Creation Date', width: 200 },
        { field: 'lastSignInTime', headerName: 'Last sign in', width: 200 },
    ];


    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selection, setSelection] = useState([]);
    const firebase = useFirebaseApp();


    const fetchUsers = async () => {
        try {
            await firebase.functions().httpsCallable('getAllUsers')()
                .then(response => {
                    setUsersList(response.data)
                    setIsLoading(false)
                }).catch(e => {
                    console.log(e)
                });
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, [firebase]);


    return (
        <React.Fragment>
            <h3>Users</h3>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    autoHeight
                    disableSelectionOnClick
                    rows={usersList}
                    columns={columns}
                    pageSize={numberOfUsers}
                    loading={isLoading}
                    onSelectionChange={(newSelection) => {
                        setSelection(newSelection.rows)
                    }} />
            </div>


        </React.Fragment >
    );
}

export default Users;