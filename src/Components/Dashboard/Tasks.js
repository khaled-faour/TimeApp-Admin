import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import CircularProgress from '@material-ui/core/CircularProgress'
import CustomCircularProgress from '../CustomCircularProgress'
import { RemoveCircleOutline } from '@material-ui/icons';
import 'firebase/functions';
import { useFirebaseApp } from 'reactfire';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));



const Tasks = () => {

    const classes = useStyles();
    const firebase = useFirebaseApp();
    const history = useHistory();
    const [selection, setSelection] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const { categoryName, categoryId } = useParams();
    const [tasksList, setTasksList] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskId, setTaskId] = useState('');

    const handleDeleteDialogView = () => {
        setDeleteDialogOpen(!deleteDialogOpen);
    }

    const deleteTask = async () => {
        try {
            setIsDeleting(true);
            await firebase.functions().httpsCallable('deleteTask')({ categoryId: categoryId, taskId: taskId })
                .then(() => {
                    return console.log('Task Deleted')
                }).catch(e => {
                    console.log(e)
                });
            setDeleteDialogOpen(false);
            fetchTasks()
        } catch (e) {
            console.log(e);
        }
    }


    const fetchTasks = async () => {
        setTasksList([]);
        setIsLoading(true);
        try {
            await firebase.functions().httpsCallable('getAllTasks')({ categoryId: categoryId })
                .then(response => {
                    console.log(response.data);
                    setTasksList(response.data);

                }).catch(e => {
                    console.log(e)
                });
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchTasks();
    }, [firebase, categoryId])



    return (
        <React.Fragment>
            <div style={{ display: 'flex' }}>
                <h3 style={{ flexGrow: 1 }}>{categoryName}</h3>
                {selection.length !== 0 ? <IconButton onClick={handleDeleteDialogView}><RemoveCircleOutline /></IconButton> : null}
                <IconButton onClick={() => { history.push(`/dashboard/Category/${categoryName}/${categoryId}/Edit`) }}><EditIcon /></IconButton>
                <IconButton onClick={() => { history.push(`/dashboard/Category/${categoryName}/${categoryId}/Task/Add`) }}><AddIcon /></IconButton>

            </div>

            <div style={{ height: 400, width: '100%' }}>
                {isLoading ? <CustomCircularProgress /> : tasksList.length === 0 ? "No Tasks"
                    : tasksList.map(task => (


                        <Accordion key={task.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1c-content"
                                id="panel1c-header"
                            >
                                <Typography className={classes.heading}>{task.name}</Typography>

                            </AccordionSummary>
                            <AccordionDetails >
                                <div />


                                <Typography variant="caption">
                                    {task.description}

                                </Typography>

                            </AccordionDetails>
                            <Divider />
                            <AccordionActions>
                                <Button onClick={() => {
                                    setTaskName(task.name);
                                    setTaskId(task.id);
                                    handleDeleteDialogView();
                                }}
                                    size="small">Delete</Button>
                                <Button onClick={() => { history.push(`/dashboard/Category/${categoryName}/${categoryId}/Task/${task.id}/Edit`) }} size="small" color="primary">
                                    Edit
                            </Button>
                            </AccordionActions>
                        </Accordion>

                    ))
                }

            </div>






            <div className={classes.seeMore}>

            </div>


            <Dialog
                open={deleteDialogOpen}
                onClose={handleDeleteDialogView}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Delete task ${taskName}?`}</DialogTitle>
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
                    <Button onClick={deleteTask} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}

export default Tasks;