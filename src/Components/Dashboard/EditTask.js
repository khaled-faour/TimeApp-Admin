import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory, useParams } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';


const EditTask = () => {
    const history = useHistory();
    const { categoryName, categoryId, taskName, taskId } = useParams();
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [alert, setAlert] = useState('');
    const firebase = useFirebaseApp();


    const editTask = async () => {
        try {
            if (newTaskName === "" || newTaskDescription === "") {
                setAlert('emptyField')
                return "";
            }
            await firebase.functions().httpsCallable('editTask')({ name: newTaskName, description: newTaskDescription, categoryId: categoryId, taskId: taskId })
                .then(() => {
                    history.push(`/dashboard/Category/${categoryName}/${categoryId}`)
                }).catch(e => {
                    setAlert('error')
                    return console.log(e)
                })
        } catch (e) {
            console.log(`Error editing Category: ${e}`)

        }
    }

    const getTask = async () => {
        try {
            await firebase.functions().httpsCallable('getTask')({ categoryId: categoryId, taskId: taskId })
                .then(response => {
                    setNewTaskName(response.data.name);
                    setNewTaskDescription(response.data.description);
                })
        } catch (e) {
            setAlert('error')
        }
    }

    useEffect(() => {
        getTask();
    }, [])

    return (
        <React.Fragment>
            <h3>Edit Task {taskName}</h3>
            {alert === 'success' ? <Alert severity="success">Changes Saved Successfully!</Alert>
                : alert === 'emptyField' ? <Alert severity="error">Category name/description cannot be empty!</Alert> :
                    alert === 'error' ? <Alert severity="error">Error!</Alert> : null}

            <TextField id="outlined-basic" label="Task name" variant="outlined" value={newTaskName} fullWidth onChange={(e) => {
                setNewTaskName(e.target.value)
            }} required />
            <Box pt={4}>
            </Box>
            <TextField id="outlined-basic" label="Task description" variant="outlined" value={newTaskDescription} fullWidth onChange={(e) => {
                setNewTaskDescription(e.target.value)
            }} required />
            <Box pt={4}>
            </Box>
            <Button type="submit" onClick={editTask} fullWidth variant="contained" color="primary" startIcon={<SaveIcon />}>
                Svae
                </Button>

        </React.Fragment>
    );
}

export default EditTask;