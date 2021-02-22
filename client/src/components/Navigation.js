import React from 'react';

// Components
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// Icons
import GitHub from '@material-ui/icons/GitHub';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import RateReview from '@material-ui/icons/RateReview';

// Transitions
import Fade from '@material-ui/core/Fade';

const Navigation = (props) => {
    return (
        <React.Fragment>
            {props.isToggle ?
            <Fade in={true} timeout={1500}>
                <Box height="100vh" width="100%" minHeight={500} bgcolor="primary.main">
                    <Toolbar>
                        <IconButton color="inherit" href="/">
                            <RateReview />
                        </IconButton>
                        <Box style={{flexGrow: 1}} />
                        <IconButton href="/" color="inherit" onClick={props.toggle}>
                            <Close />
                        </IconButton>
                    </Toolbar>
                    <Box height="calc(100vh - 110px)" minHeight={300} style={{display: "flex", flexDirection: "column"}} pb={6}>
                        <Box style={{flexGrow: 1}} />
                        <Box textAlign="center">
                            <Link underline="none" href="/">
                                <Typography variant="subtitle1" color="textPrimary" style={styles.ToggleItem}>Home</Typography>
                            </Link>
                            <Link underline="none" href="/">
                                <Typography variant="subtitle1" color="textPrimary" style={styles.ToggleItem}>View Source Code</Typography>
                            </Link>
                        </Box>
                        <Box style={{flexGrow: 1}} />
                    </Box>
                </Box>
            </Fade> :
            <Toolbar>
                <IconButton color="inherit" href="/">
                    <RateReview />
                </IconButton>
                <Box style={{flexGrow: 1}} />
                {props.isMobile ?
                    <IconButton onClick={() => props.toggle()}>
                        <Menu />
                    </IconButton> :
                    <React.Fragment>
                        <Link underline="none" href="/" style={styles.Link}>
                            <Typography variant="subtitle1" color="textSecondary">Home</Typography>
                        </Link>
                        <Button startIcon={<GitHub />} size="large" variant="contained" color="default" href="https://github.com/Lewis1000/get-aliexpress-reviews" target="_blank" disableElevation style={styles.Button}>
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
    },
    ToggleItem: {
        margin: "25px 25px 25px 25px"
    }
};

export default Navigation;