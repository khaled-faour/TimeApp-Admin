import React, { useEffect, useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import dateFormat from 'dateformat';
import TimeAgo from 'react-timeago'



const Notifications = ({ numberOfNotifications = 100 }) => {
    const firebase = useFirebaseApp();
    const [notificationsList, setNotificationsList] = useState([]);

    const getNotifications = async () => {
        try {
            await firebase.functions().httpsCallable('getNotifications')({ numberOfNotifications: numberOfNotifications })
                .then(response => {
                    setNotificationsList(response.data);
                }).catch(e => {
                    console.log(e)
                });
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getNotifications();
    }, [numberOfNotifications])

    return (
        <React.Fragment>
            <h3>Notifications</h3>
            <div>
                {
                    notificationsList.map(notification => {

                        if (notification.data.type === "Start") {
                            const date = new Date(notification.data.startTime._seconds * 1000).toString();
                            const formattedDate = dateFormat(date, "yyyy-mm-dd H:MM:ss");

                            return (

                                <Alert severity="info" key={notification.id}>

                                    <AlertTitle >{notification.data.user} started task {notification.data.taskName}</AlertTitle>
                                    <TimeAgo date={formattedDate} />

                                </Alert>



                            )
                        } else if (notification.data.type === "Finish") {
                            const date = new Date(notification.data.endTime._seconds * 1000).toString();
                            const formattedDate = dateFormat(date, "yyyy-mm-dd H:MM:ss");
                            return (

                                <Alert severity="info" key={notification.id}>
                                    <AlertTitle>{notification.data.user} finished task {notification.data.taskName}</AlertTitle>
                                    <TimeAgo date={formattedDate} />

                                </Alert>


                            )
                        }
                    })
                }
            </div>
        </React.Fragment >
    );
}

export default Notifications;