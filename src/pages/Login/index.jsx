import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { object, string } from 'yup';
import { Components } from '../../utils/material-ui';
// import { useStateValue } from '../../utils/store';
// import { API_POST } from '../../utils/api';
// import { cookieSave, decodeToken } from '../../utils/cookie';
import styles from './styles';

const { withStyles, Grid, TextField, Button, Typography } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

// const schema = object().shape({
//   email: string().required(),
//   password: string().required()
// });

// const redirect = {
//   admin: '/incident',
//   reporting: '/report-incident/ongoing',
//   incident: '/incident'
// };

const Login = ({ classes }) => {
  // const [, dispatch] = useStateValue();
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema)
  // });

  // const onSubmit = (data) => {
  // API_POST('auth/login', data)
  //   .then((res) => {
  //     const { role } = decodeToken(res.data.token);
  //     cookieSave(res.data.token);
  //     dispatch({
  //       type: 'ALERT_OPEN',
  //       severity: 'success',
  //       isOpen: true,
  //       label: res.data?.message || 'Success'
  //     });
  //     dispatch({
  //       type: 'IS_LOGGED_IN',
  //       isLogin: true,
  //       role: role
  //     });
  //     setTimeout(() => {
  //       window.location.href = redirect[`${role}`];
  //     }, 1000);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     err.status === 404
  //       ? dispatch({
  //           type: 'ALERT_OPEN',
  //           severity: 'error',
  //           isOpen: true,
  //           label: 'Network Error'
  //         })
  //       : dispatch({
  //           type: 'ALERT_OPEN',
  //           severity: 'error',
  //           isOpen: true,
  //           label: err.data.errors[0]?.message ?? 'Oops!!, Please try again'
  //         });
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/home';
  };

  return (
    <>
      <Container direction={'column'} className={classes.login_page}>
        <Item>
          <Typography className={classes.heading}> Dror Admin</Typography>
        </Item>
        <Item>
          <Item className={classes.paper}>
            <Typography
              className={classes.login_label}
              sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
              LOGIN
            </Typography>
            <form onSubmit={handleSubmit}>
              <Container direction={'column'} spacing={2}>
                <Item>
                  <TextField
                    variant="outlined"
                    name="email"
                    required={true}
                    label="Email"
                    // helperText={errors.username ? errors.username.message : ''}
                    type="email"
                    // inputRef={register({ required: true })}
                    fullWidth
                  />
                </Item>
                <Item>
                  <TextField
                    variant="outlined"
                    name="password"
                    required={true}
                    label="Password"
                    // inputRef={register({ required: true })}
                    // helperText={errors.password ? errors.password.message : ''}
                    type="password"
                    fullWidth
                  />
                </Item>
                <Item>
                  <Button
                    color="primary"
                    type="submit"
                    variant="contained"
                    fullWidth
                    rounded
                    className={classes.button}>
                    Submit
                  </Button>
                </Item>
              </Container>
            </form>
          </Item>
        </Item>
      </Container>
    </>
  );
};

export default withStyles(styles)(Login);
