import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { mergeClasses } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3,2).Dashboard
    },
}));

export default function Dashboard() {
    return (
        <div>
           
            <Paper className={mergeClasses.root}>
                <Typography variant="h5" component="h3">
                    This is a sheet of paper
                </Typography>


            <Typography component="p">
                Paper can be used to build surface
            </Typography>
            </Paper>
        
        </div>
    )
}