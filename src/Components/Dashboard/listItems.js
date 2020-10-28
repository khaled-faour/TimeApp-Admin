import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import { Link } from 'react-router-dom'
import { useFirebaseApp } from 'reactfire';
import 'firebase/functions';
import 'firebase/firestore';






export const MainListItems = () => {
    const firebase = useFirebaseApp();
    const [categoriesList, setCategoriesList] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }





    const fetchCategories = async () => {

        try {
            await firebase.functions().httpsCallable('getAllCategories')()
                .then(response => {
                    setCategoriesList(response.data);
                }).catch(e => {
                    console.log(e)
                });
        } catch (e) {
            console.log(e);
        }

    }



    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        < div >
            <ListItem button component={Link} to="/dashboard">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>


            <ListItem button component={Link} to="/dashboard/users" >
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button style={{ paddingLeft: 32 }} component={Link} to={'/dashboard/Category/Add'}>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Categroy" />
                    </ListItem>

                    <ListItem button style={{ paddingLeft: 32 }} component={Link} to='/dashboard/Categories'>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary="View All Categories" />
                    </ListItem>

                    {categoriesList.map(category => (
                        <ListItem button key={category.id} style={{ paddingLeft: 32 }} component={Link} to={`/dashboard/Category/${category.name}/${category.id}`} >
                            <ListItemIcon>
                                <SubdirectoryArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary={category.name} />
                            <ChevronRightIcon />
                        </ListItem>

                    ))
                    }

                </List>
            </Collapse>
        </div >
    )
};

