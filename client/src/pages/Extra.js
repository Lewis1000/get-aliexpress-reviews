import React from 'react';

// Components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const Extra = (props) => {
    return (
        <React.Fragment>
            <Box height="calc(100vh - 110px)" minHeight={500} style={{display: "flex", flexDirection: "column"}}>
                <Box style={{flexGrow: 1}} />
                <Box textAlign="center">
                    <Container>
                        test
                    </Container>
                </Box>
                <Box style={{flexGrow: 1}} />
            </Box>
        </React.Fragment>
    );
};

export default Extra;