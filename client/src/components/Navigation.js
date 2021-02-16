import React from 'react';

// Components
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// Icons
import GitHub from '@material-ui/icons/GitHub';
import Menu from '@material-ui/icons/Menu';

const Navigation = (props) => {
    return (
        <React.Fragment>
            {props.isToggle ?
            <Box>
                <Toolbar />
            </Box> :
            <Toolbar>
                <Link underline="none" href="/">
                    <Typography variant="h6">Get Reviews</Typography>
                </Link>
                <Box style={{flexGrow: 1}} />
                {props.isMobile ?
                    <Menu /> :
                    <React.Fragment>
                        <Link underline="none" href="/">
                            <Typography variant="subtitle1" color="textSecondary">Home</Typography>
                        </Link>
                        <Link underline="none" href="/extra">
                            <Typography variant="subtitle1" color="textSecondary">How it works</Typography>
                        </Link>
                        <Button startIcon={<GitHub />} variant="contained" color="default" href="https://github.com/Lewis1000/get-aliexpress-reviews" target="_blank">
                            View source code
                        </Button>
                    </React.Fragment>
                }
            </Toolbar>       
            }
        </React.Fragment>
    );
};

export default Navigation;