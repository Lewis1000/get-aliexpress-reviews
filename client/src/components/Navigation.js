import React from 'react';

// Components
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';

// Icons
import GitHub from '@material-ui/icons/GitHub';
import Menu from '@material-ui/icons/Menu';
import RateReview from '@material-ui/icons/RateReview';
import Close from '@material-ui/icons/Close';

const Navigation = (props) => {
    return (
        <React.Fragment>
            {props.isToggle ?
            <Box height="100vh" width="100%" minHeight={500} bgcolor="primary.main">
                <Toolbar>
                    <Box style={{flexGrow: 1}} />
                    <IconButton href="/" color="inherit" onClick={() => props.toggle()}>
                        <Close />
                    </IconButton>
                </Toolbar>
                <Box height="calc(100vh - 110px)" minHeight={500} style={{display: "flex", flexDirection: "column"}}>
                    <Box style={{flexGrow: 1}} />
                    <Box textAlign="center">
                        <Container>
                            <Link underline="none" href="/">
                                <Typography variant="subtitle1" color="textPrimary">Home</Typography>
                            </Link>
                            <Link underline="none" href="/">
                                <Typography variant="subtitle1" color="textPrimary">How it works</Typography>
                            </Link>
                            <Link underline="none" href="/">
                                <Typography variant="subtitle1" color="textPrimary">View source code</Typography>
                            </Link>
                        </Container>
                    </Box>
                    <Box style={{flexGrow: 1}} />
                </Box>
            </Box> :
            <Toolbar>
                <Box style={{flexGrow: 1}} />
                {props.isMobile ?
                    <IconButton onClick={() => props.toggle()}>
                        <Menu />
                    </IconButton> :
                    <React.Fragment>
                        <Link underline="none" href="/" style={styles.Link}>
                            <Typography variant="subtitle1" color="textSecondary">Home</Typography>
                        </Link>
                        <Link underline="none" href="/extra" style={styles.Link}>
                            <Typography variant="subtitle1" color="textSecondary">How it works</Typography>
                        </Link>
                        <Button startIcon={<GitHub />} size="large" variant="contained" color="primary" href="https://github.com/Lewis1000/get-aliexpress-reviews" target="_blank" disableElevation style={styles.Button}>
                            View source code
                        </Button>
                    </React.Fragment>
                }
            </Toolbar>       
            }
        </React.Fragment>
    );
};

const styles = {
    Link: {
        marginRight: "32px"
    },
    Button: {
        padding: "16px 25px 16px 25px",
        borderRadius: "8px"
    }
};

export default Navigation;