import React from 'react';
import { Components } from '../../utils/material-ui';
import styles from './styles';
import theme from '../../utils/theme';
import PropTypes from 'prop-types';

const { withStyles, Grid, Typography } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const NotFound = ({ classes }) => {
  return (
    <>
      <Container direction={'column'} className={classes.notFoundPage}>
        <Item>
          <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
            404
          </Typography>
        </Item>
        <Item>
          <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
            Page Not Found
          </Typography>
        </Item>
      </Container>
    </>
  );
};

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
