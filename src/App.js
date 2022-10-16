import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/posts';
import Form from './components/Form/form';
import useStyles from './styles';

import appground from './images/appground.jpg';

const App = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Airsoft turgelis</Typography>
                <img className={classes.image} src={appground} alt="background" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container> 
    );
};

export default App;
