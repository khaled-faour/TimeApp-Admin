import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useHistory, useParams } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import { LinearProgress } from '@material-ui/core';

const AddCategory = () => {
    const history = useHistory();
    const { categoryName, categoryId } = useParams();
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [alert, setAlert] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const firebase = useFirebaseApp();


    const addTask = async () => {
        try {
            if (taskName === "" || taskDescription === "") {
                setAlert('emptyField')
                return "";
            }
            setIsLoading(true);
            await firebase.functions().httpsCallable('addTask')({ categoryId: categoryId, name: taskName, description: taskDescription })
                .then(() => {
                    history.push(`/dashboard/Category/${categoryName}/${categoryId}`)
                }).catch(e => {
                    setAlert('error')
                    setIsLoading(false);
                    return console.log(e)
                })
        } catch (e) {
            console.log(`Error adding Category: ${e}`)
            setIsLoading(false)
            console.log(taskName)
        }
    }

    return (
        <React.Fragment>
            {isLoading ? <LinearProgress /> : null}
            <h3>Add Task</h3>
            {alert === 'success' ? <Alert severity="success">Task Added Successfully!</Alert>
                : alert === 'emptyField' ? <Alert severity="error">Task name/description cannot be empty!</Alert> :
                    alert === 'error' ? <Alert severity="error">Error!</Alert> : null}

            <TextField id="outlined-basic" label="Task name" variant="outlined" fullWidth onChange={(e) => {
                setTaskName(e.target.value)
            }} required />
            <Box pt={4}>
            </Box>
            <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth onChange={(e) => {
                setTaskDescription(e.target.value)
            }} required />
            <Box pt={4}>
            </Box>
            <Button type="submit" onClick={addTask} fullWidth variant="contained" color="primary" startIcon={<AddIcon />}>
                Add Task
                </Button>

        </React.Fragment>
    );
}

export default AddCategory;