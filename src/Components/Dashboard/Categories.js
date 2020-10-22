import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DataGrid } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'firebase/functions';
import 'firebase/firestore';
import { useFirebaseApp } from 'reactfire';
import { RemoveCircleOutline } from '@material-ui/icons';
import { useHistory } from 'react-router-dom'



export const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));





const Categories = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Category Name', width: 200 },
    ];

    const [isLoading, setIsLoading] = useState(true);
    const [selection, setSelection] = useState([]);
    const firebase = useFirebaseApp();
    const classes = useStyles();
    const [categoriesList, setCategoriesList] = useState([]);
    const history = useHistory();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteDialogView = () => {
        setDeleteDialogOpen(!deleteDialogOpen);
    }


    const deleteCategories = async () => {
        try {
            setIsDeleting(true);

            selection.map(async category => {
                await firebase.functions().httpsCallable('deleteCategory')({ categoryId: category.id })
                    .then(() => {
                    }).catch(e => {
                        console.log(e)
                    });
                setDeleteDialogOpen(false);
                fetchCategories();

            })

            fetchCategories();
        } catch (e) {
            console.log(e);
        }
    }

    const fetchCategories = async () => {

        try {
            setIsLoading(true);
            await firebase.functions().httpsCallable('getAllCategories')()
                .then(response => {
                    setCategoriesList(response.data);
                }).catch(e => {
                    console.log(e)
                });
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }
    const redirectToAdd = () => {
        history.push('/dashboard/Category/Add')
    }


    useEffect(() => {
        fetchCategories();
    }, []);









    return (
        <React.Fragment>
            <div style={{ display: 'flex', paddingLeft: 10 }}>
                <h3 style={{ flexGrow: 1 }}>Categories</h3>
                {selection.length !== 0 ? <IconButton onClick={handleDeleteDialogView}><RemoveCircleOutline /></IconButton> : null}
                <IconButton onClick={redirectToAdd}><AddIcon /></IconButton>
            </div>


            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    disableSelectionOnClick
                    rows={categoriesList}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    loading={isLoading}
                    onSelectionChange={(newSelection) => {
                        setSelection(newSelection.rows)
                    }} />
            </div>



            <div className={classes.seeMore}>

            </div>

            <Dialog
                open={deleteDialogOpen}
                onClose={handleDeleteDialogView}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Delete selected Categories?`}</DialogTitle>
                <DialogContent>
                    {isDeleting ?
                        <DialogContentText id="alert-dialog-description">
                            <div style={{ display: 'flex' }}>
                                <CircularProgress />
                                Deleting...
                            </div>

                        </DialogContentText>
                        : <DialogContentText id="alert-dialog-description">
                            You can't undo changes.
                        </DialogContentText>
                    }

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogView} color="primary">
                        Cancel
          </Button>
                    <Button onClick={deleteCategories} color="primary" autoFocus>
                        Delete
          </Button>
                </DialogActions>
            </Dialog>


        </React.Fragment >
    );
}

export default Categories;