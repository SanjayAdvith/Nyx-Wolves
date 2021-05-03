import React from 'react';
import { Paper, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, LockOutlined } from '@material-ui/icons'

const Login = () => {


    return (

        <>
            <Paper
                elevation={6}
                style={{
                    width: '50%',
                    margin: 'auto',
                    marginTop: '20px',
                    border: '1px',
                    textAlign: 'center',
                }}>
                <div>

                    <h1>Login Form</h1>
                    <Grid container spacing={5} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={6} sm={6} xs={6}>
                            <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="flex-end">
                        <Grid item>
                            <LockOutlined />
                        </Grid>
                        <Grid item md={6} sm={6} xs={6}>
                            <TextField id="password" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="contained" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
            </Paper>

        </>
    )
}

export default Login
