import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory, useParams } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';

const EditCategory = () => {
    const history = useHistory();
    const { categoryName, categoryId } = useParams();
    const [newCategoryName, setNewCategoryName] = useState(categoryName);
    const [alert, setAlert] = useState('');
    const firebase = useFirebaseApp();


    const editCategory = async () => {
        try {
            if (newCategoryName === "") {
                setAlert('emptyName')
                return "";
            }
            await firebase.functions().httpsCallable('editCategory')({ name: newCategoryName, categoryId: categoryId })
                .then(() => {
                    history.push('/dashboard/Categories')
                }).catch(e => {
                    setAlert('error')
                    return console.log(e)
                })
        } catch (e) {
            console.log(`Error editing Category: ${e}`)
        }
    }


    return (
        <React.Fragment>
            <h3>Edit Category</h3>
            {alert === 'success' ? <Alert severity="success">Changes Saved Successfully!</Alert>
                : alert === 'emptyName' ? <Alert severity="error">Category name cannot be empty!</Alert> :
                    alert === 'error' ? <Alert severity="error">Error!</Alert> : null}

            <TextField id="outlined-basic" label="Category name" variant="outlined" value={newCategoryName} fullWidth onChange={(e) => {
                setNewCategoryName(e.target.value)
            }} required />
            <Box pt={4}>
            </Box>
            <Button type="submit" onClick={editCategory} fullWidth variant="contained" color="primary" startIcon={<SaveIcon />}>
                Svae
                </Button>

        </React.Fragment>
    );
}

export default EditCategory;