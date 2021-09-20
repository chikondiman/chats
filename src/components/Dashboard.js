import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { mergeClasses } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {CTX} from './Store'

const useStyles = makeStyles(theme => ({
    root: {
        margin: '30px',
        padding: theme.spacing(3,2).Dashboard
    },
    flex: {
        display: 'flex'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        width: '85%'
        
    },
    button: {
        width: '15px',
        height: '5px'
        
    } 
}));

export default function Dashboard() {

const [allChats] = React.useContext(CTX);
const classes = useStyles();
const topics = Object.keys(allChats);

 
  
    const [activeTopic, changeActiveTopic] = React.useState(topics[0])
    const [textValue, changeTextValue] = React.useState('');


   

    return (
        <div>
           
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Chat app
                </Typography>


            <Typography variant="h5" component="h5">
               {activeTopic}
            </Typography>
            <div className={classes.flex}>
                <div className={classes.topicsWindows}>
                    <List>
                        {
                            topics.map(topic => (

                                <ListItem onClick={e=>changeActiveTopic(e.target.innerText)} key={topic}button>
                  
                            <ListItemText primary={topic}>

                            </ListItemText>
                            </ListItem>

                            ))
                        }

                    </List>

                </div>

                <div className={classes.chatWindow}>

              
                        {
                            [{from: 'user', msg: 'hello'}].map((chat, i) => (

                                    <div className={classes.flex} key={chat.from}>

                                            <Chip label={chat.from} className={classes.chip}/>
                                            <Typography variant='body1' gutterBottom></Typography>
                                        </div>

                            ))
                        }

             
                </div>

            </div>

            <div className={classes.flex}>
            
     
            <TextField
             id="standard-name"
             label="Send a chat"
             className={classes.chatBox}
             value={textValue}
             onChange={e => changeTextValue(e.target.value)}
             margin="normal"
             padding="10px"/>
             
            <Button variant="contained"  color="primary">
                    Send
            </Button>



            <div className={classes.chatBox}>
            </div>
            <div className={classes.topicsWindow}>
            
            </div>
     


            </div>
            </Paper>
        
        </div>
    )
}