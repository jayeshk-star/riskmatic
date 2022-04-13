import React from 'react';
import { Components } from '../../utils/material-ui';
import styles from './styles';
const { withStyles, Card, Typography } = Components;

function CountsCard(props) {
  const { item, classes, onClick, selectedCard } = props;

  return (
    <Card
      onClick={() => onClick(item)}
      className={selectedCard.value === item.value ? classes.selectedCard : classes.unselectedCard}>
      <Typography align="center" variant="h6">
        {item.label}
      </Typography>
    </Card>
  );
}

export default withStyles(styles)(CountsCard);
