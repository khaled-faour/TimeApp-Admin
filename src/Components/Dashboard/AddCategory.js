import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import { LinearProgress } from '@material-ui/core';

const AddCategory = () => {
    const history = useHistory();
    const [categoryName, setCategoryName] = useState('');
    const [alert, setAlert] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const firebase = useFirebaseApp();


    const addCategory = async () => {
        try {
            if (categoryName === "") {
                setAlert('emptyName')
                return "";
            }
            setIsLoading(true);
            await firebase.functions().httpsCallable('addCategory')({ name: categoryName })
                .then(() => {
                    history.push('/dashboard/Categories')
                }).catch(e => {
                    setAlert('error')
                    setIsLoading(false);
                    return console.log(e)
                })
        } catch (e) {
            console.log(`Error adding Category: ${e}`)
            setIsLoading(false);
        }
    }


    return (
        <React.Fragment>
            {isLoading ? <LinearProgress /> : null}
            <h3>Add Category</h3>
            {alert === 'success' ? <Alert severity="success">Category Added Successfully!</Alert>
                : alert === 'emptyName' ? <Alert severity="error">Category name cannot be empty!</Alert> :
                    alert === 'error' ? <Alert severity="error">Error!</Alert> : null}

            <TextField id="outlined-basic" label="Category name" variant="outlined" fullWidth onChange={(e) => {
                setCategoryName(e.target.value)
            }} required />
            <Box pt={4}>
            </Box>
            <Button type="submit" onClick={addCategory} fullWidth variant="contained" color="primary" startIcon={<AddIcon />}>
                Add Category
                </Button>

        </React.Fragment>
    );
}

export default AddCategory;