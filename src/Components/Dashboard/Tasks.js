import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import 'firebase/functions';
import { useFirebaseApp } from 'reactfire';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));



const Tasks = () => {
    const classes = useStyles();
    const [tasksList, setTasksList] = useState([]);
    const firebase = useFirebaseApp();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                await firebase.functions().httpsCallable('getAllTasks')()
                    .then(async response => {
                        console.log(response.data)
                        await setTasksList(response.data);
                    }).catch(e => {
                        console.log(e)
                    });
            } catch (e) {
                console.log(e);
            }
        };
        fetchTasks();
    }, [firebase]);

    return (
        <React.Fragment>
            <h3>All Tasks</h3>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Task Name</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasksList.length === 0 ?

                        <TableRow>
                            <TableCell key="CircularProgress">
                                <p>Loading users list...</p>
                            </TableCell>
                        </TableRow>
                        : tasksList
                            .map(task => (
                                <TableRow key={task.taskId}>
                                    <TableCell>{task.data.name}</TableCell>
                                    <TableCell>{task.data.description}</TableCell>
                                </TableRow>
                            ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>

            </div>
        </React.Fragment >
    );
}

export default Tasks;