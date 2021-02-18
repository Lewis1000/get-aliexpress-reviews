import React from 'react';

// Components
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

// Transitions
import Fade from '@material-ui/core/Fade';

const Loading = () => {
    return (
        <React.Fragment>
            <Fade in={true} timeout={1500}>
                <Box height="calc(100vh - 110px)" minHeight={500} style={{display: "flex", flexDirection: "column"}}>
                    <Box style={{flexGrow: 1}} />
                        <Box textAlign="center">
                            <CircularProgress />
                        </Box>
                    <Box style={{flexGrow: 1}} />
                </Box>
            </Fade>
        </React.Fragment>
    );
};

export default Loading;