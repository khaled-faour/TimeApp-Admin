import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',

        },
        button: {
            margin: theme.spacing(2),
        },
        placeholder: {
            height: 40,
        },
    }),
);

export default function CustomCircularProgress() {
    const classes = useStyles();









    return (
        <div className={classes.root}>
            <div className={classes.placeholder}>

                <CircularProgress />

            </div>


        </div>
    );
}