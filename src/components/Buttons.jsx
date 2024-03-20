import React from 'react';
import { IconButton, Grid, Typography } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

const Buttons = ({ setUrl, prevUrl, nextUrl }) => {
    return (
        <Grid container justifyContent="center" spacing={2} sx={{ p: 2 }}>
            {/* Button for navigating to the previous page */}
            <Grid>
                <IconButton onClick={() => setUrl(prevUrl)} disabled={prevUrl === null}>
                    {/* Icon and label for the previous button */}
                    <>
                        <NavigateBefore />
                        <Typography variant="button" component="span">Previous</Typography> {/* Text "Previous" */}
                    </>
                </IconButton>
            </Grid>
            {/* Button for navigating to the next page */}
            <Grid>
                <IconButton onClick={() => setUrl(nextUrl)} disabled={nextUrl === null}>
                    {/* Icon and label for the next button */}
                    <>
                        <Typography variant="button" component="span">Next</Typography> {/* Text "Next" */}
                        <NavigateNext />
                    </>
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default Buttons;
