import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function mapStateToProps(state) {
  return {
    employee: state.user
  };
}
const mapDispatchToProps = (dispach) => ({
  signup: (obj) => dispach(signup(obj))
})
export default connect(mapStateToProps, mapDispatchToProps)(function SignUp(props) {
  const { signup } = props;
  const navigate = useNavigate()
  const classes = useStyles({});
  const [username, setUsername] = useState()
  const [password, setpassward] = useState()
  const [email, setemail] = useState()
  const [emailMessage, setemailMessage] = useState()
  const [PasswordMessage, setPasswordMessage] = useState()
  const [usernameMessage, setUsernameMessage] = useState()
  const [message, setMessage] = useState()

  const signUp = async () => {
    let success = await signup({ username, email, password })
    if (success === true)
      navigate('/candidates')
    else {
      setMessage("there was error, please try again...")
    }
  }

  const Validate = () => {
    let flag = true;
    if (!username) {
      flag = false;
      setUsernameMessage("username is required")
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      flag = false;
      setemailMessage("email isn't valid")
    }
    if (!password) {
      setPasswordMessage("password is required")
      flag = false;
    }
    if (flag === true)
      signUp()
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="User Name"
                  name="firstName"
                  autoComplete="fname"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <p style={{ color: "red" }}>{usernameMessage}</p>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"

                  onChange={(e) => setemail(e.target.value)}
                />
              </Grid>
              <p style={{ color: "red" }}>{emailMessage}</p>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setpassward(e.target.value)}
                />
              </Grid>
              <p style={{ color: "red" }}>{PasswordMessage}</p>
            </Grid>
            <p style={{ color: "red" }}>{message}</p>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => Validate()}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
})
