const styles = (theme) => {
  return {
    mainContainer: {
      backgroundColor: theme.palette.common.gray98,
      padding: theme.spacing(5)
    },
    searchBar: {
      width: '100%'
      // minWidth: '220px',
    },
    tableContainer: {
      marginTop: '400px'
    },
    selectedCard: {
      width: '200px',
      height: '40px',
      color: 'white',
      backgroundColor: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    unselectedCard: {
      cursor: 'pointer',
      width: '200px',
      height: '40px',
      color: 'black',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    dateSection: {
      // marginLeft: theme.spacing(7),
      marginTop: theme.spacing(2)
    },
    datePicker: {
      width: 180
    },
    button: {
      color: 'white',
      fontSize: '12px',
      padding: theme.spacing(0, 2)
    }
  };
};

export default styles;
