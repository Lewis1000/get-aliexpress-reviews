import React from 'react';

// Components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Home = (props) => {
    return (
        <React.Fragment>
            <Box height="calc(100vh - 110px)" minHeight={500} style={{display: "flex", flexDirection: "column"}}>
                <Box style={{flexGrow: 1}} />
                <Box textAlign="center">
                    <Container>
                        <Typography variant="h2">Platform created to import AliExpress reviews</Typography>
                        <Typography variant="body1">Just input your product URL and we'll fetch all current reviews</Typography>
                        <TextField variant="outlined" label="aliexpress.com/item/item_number" fullWidth />
                        <Button variant="contained" color="primary">Get Reviews</Button>
                    </Container>
                </Box>
                <Box style={{flexGrow: 1}} />
            </Box>
        </React.Fragment>
    );
};

export default Home;