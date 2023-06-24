import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, FormControlLabel, FormControl, FormLabel, Checkbox } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Header from "./loginsignupheader"
import Footer from "./Loginsignupfooter"


const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#24248f' };
    const marginTop = { marginTop: 10 };

    return (
        <>
        <Header />
        <Grid container justifyContent="center">
            <Grid item>
                <Paper elevation={20} sx={paperStyle}>
                    <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                            <Avatar sx={avatarStyle}>
                                <AddCircleOutlineOutlinedIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" sx={headerStyle}>Sign Up</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" gutterBottom>Please fill this form to create an account!</Typography>
                        </Grid>
                    </Grid>
                    <form>
                        <Grid container direction="column" spacing={2}>
                            <Grid item style={marginTop}>
                                <TextField  fullWidth label="Name" placeholder="Enter your name" />
                            </Grid>
                            <Grid item>
                                <TextField fullWidth label="Email" placeholder="Enter your email" />
                            </Grid>
                            <Grid item>
                                <TextField fullWidth label="Phone Number" placeholder="Enter your phone number" />
                            </Grid>
                            <Grid item>
                                <TextField fullWidth label="Password" placeholder="Enter your password" type="password" />
                            </Grid>
                            <Grid item>
                                <TextField fullWidth label="Confirm Password" placeholder="Confirm your password" type="password" />
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<Checkbox name="checkedA" />} label="I accept the terms and conditions." />
                            </Grid>
                            <Grid item>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Sign up</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
        <Footer />
    </>  
    );
};

export default Signup;
