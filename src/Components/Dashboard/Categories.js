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


const Categories = () => {

    const classes = useStyles();
    const [categoriesList, setCategoriesList] = useState([]);
    const firebase = useFirebaseApp();
    useEffect(() => {

        const fetchCategories = async () => {

            try {
                await firebase.functions().httpsCallable('getAllCategories')()
                    .then(async response => {
                        console.log(response.data);
                        await setCategoriesList(response.data)
                    }).catch(e => {
                        console.log(e)
                    });
            } catch (e) {
                console.log(e);
            }

        }

        fetchCategories();
    }, [firebase]);

    return (
        <React.Fragment>
            <h3>Categories</h3>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Category Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categoriesList.length === 0 ?

                        <TableRow>
                            <TableCell key="CircularProgress">
                                <p>Loading categories list...</p>
                            </TableCell>
                        </TableRow>
                        : categoriesList.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>{category.data.name}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>

            </div>
        </React.Fragment >
    );
}

export default Categories;