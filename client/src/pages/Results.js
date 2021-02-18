import React from 'react';

// Components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Icons
import Star from '@material-ui/icons/Star';

// Transitions
import Fade from '@material-ui/core/Fade';

const Results = (props) => {

    function getReviewStars(value) {
        const reviewStar = parseInt(value);
        const reviewElements = [];
        while (reviewElements.length < reviewStar) {
            reviewElements.push(<Star color="primary" key={reviewElements.length} />);
        };
        while (reviewElements.length < 5) {
            reviewElements.push(<Star color="disabled" key={reviewElements.length} />);
        };
        return reviewElements;
    };

    return (
        <React.Fragment>
            <Fade in={true} timeout={1500}>
                <Box pt={3} pb={6} pl={3} pr={3}>
                    <Box pb={3} textAlign="center">
                        <Typography variant="subtitle1" color="textSecondary">Showing <b>{props.results.length}</b> results | Max set to <b>10</b></Typography>
                    </Box>
                    <Container>
                        {props.results.map((element) => {
                            return (
                                <Box mt={3} p={3} bgcolor="#fff" borderRadius="10px" border={2} borderColor="#e0e0e0" display="block" key={element.id}>
                                    <Grid container>
                                        <Grid item xs={4} sm={4} md={6} lg={6} xl={6}>
                                            <Box p={1}>
                                                <Typography variant="body1" color="textSecondary" style={styles.Tag}>Name</Typography>
                                                <Typography variant="subtitle1" color="textPrimary">{element.name}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={8} sm={8} md={6} lg={6} xl={6}>
                                            <Box p={1} textAlign="right">
                                                <Typography variant="body1" color="textSecondary" style={styles.Tag}>Rating</Typography>
                                                {getReviewStars(element.star)}
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={3} md={2} lg={2} xl={2}>
                                            <Box p={1}>
                                                <Typography variant="body1" color="textSecondary" style={styles.Tag}>Location</Typography>
                                                <Typography variant="subtitle1" color="textPrimary">{element.location}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={9} md={10} lg={10} xl={10}>
                                            <Box p={1}>
                                                <Typography variant="body1" color="textSecondary" style={styles.Tag}>Comments</Typography>
                                                <Typography variant="body1" color="textPrimary">{element.review}</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            );
                        })}
                    </Container>
                </Box>
            </Fade>
        </React.Fragment>
    );
};

const styles = {
    Tag: {
        marginBottom: "8px"
    }
};

export default Results;