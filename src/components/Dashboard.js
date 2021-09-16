import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { mergeClasses } from '@material-ui/styles';

export default function Dashboard() {
    return (
        <div>
            <Paper className={mergeClasses.root}>
                <Typogrphy variant="h5" component="h3">
                    This is a shet of paper
                </Typogrphy>
            </Paper>
        
        </div>
    )
}