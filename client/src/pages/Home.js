import React, { useState } from 'react';

// Components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

// Icons
import Send from '@material-ui/icons/Send';
import FileCopy from '@material-ui/icons/FileCopy';

const Home = (props) => {
    const [productValue, setProductValue] = useState("");

    function clickEvent() {
        props.send(productValue);
    };

    return (
        <React.Fragment>
            <Box height="calc(100vh - 110px)" minHeight={500} style={{display: "flex", flexDirection: "column"}}>
                <Box style={{flexGrow: 1}} />
                <Box textAlign="center" pl={4} pr={4}>
                    <Container>
                        {!props.isMobile ?
                        <Box>
                            <Box mb={3}>
                                <Typography variant="h3">Platform created to import <span style={styles.Ali}>Ali</span><span style={styles.Express}>Express</span> reviews</Typography>
                            </Box>
                            <Box mb={4}>
                                <Typography variant="body1" color="textSecondary">Just input your product URL and we'll fetch all current reviews</Typography>
                            </Box>
                            <Box style={{display: "flex", flexDirection: "row"}}>
                                <IconButton color="inherit" href="#">
                                    <FileCopy />
                                </IconButton>
                                <Box style={{flexGrow: 1, marginLeft: "20px", marginRight: "20px"}}>
                                    <TextField variant="outlined" fullWidth onChange={(e) => setProductValue(e.target.value)} value={productValue} />
                                </Box>
                                <Button startIcon={<Send />} variant="contained" color="primary" size="large" disableElevation style={styles.Button} onClick={() => clickEvent()}>Get Reviews</Button>
                            </Box>
                            <Box pt={3} >
                                
                            </Box>
                        </Box> :
                        <Box>
                            <Box mb={3}>
                                <Typography variant="h4">Platform created to import <span style={styles.Ali}>Ali</span><span style={styles.Express}>Express</span> reviews</Typography>
                            </Box>
                            <Box mb={4}>
                                <Typography variant="body2" color="textSecondary">Just input your product URL and we'll fetch all current reviews</Typography>
                            </Box>
                            <Box style={{display: "flex", flexDirection: "column"}}>
                                <Box style={{flexGrow: 1, marginBottom: "20px", display: "flex", flexDirection: "row"}}>
                                    <TextField variant="outlined" fullWidth onChange={(e) => setProductValue(e.target.value)} value={productValue} />
                                </Box>
                                <Button startIcon={<Send />} variant="contained" color="primary" size="large" disableElevation fullWidth style={styles.Button} onClick={() => clickEvent()}>Get Reviews</Button>
                            </Box>
                        </Box>
                        }
                    </Container>
                </Box>
                <Box style={{flexGrow: 1}} />
            </Box>
        </React.Fragment>
    );
};

const styles = {
    Button: {
        padding: "16px 25px 16px 25px",
        borderRadius: "8px"
    },
    Ali: {
        color: "#F79917",
        fontWeight: 700
    },
    Express: {
        color: "#E52F20",
        fontWeight: 700
    }
};

export default Home;