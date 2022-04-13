import { Components } from './material-ui';

const { createTheme } = Components;

const theme = createTheme({
  palette: {
    primary: {
      main: '#01386F'
    },
    common: {
      gray90: '#e5e5e5',
      gray98: '#fafafa',
      green: '#00c453',
      orange: '#c47900',
      red: '#ff0000',
      white: '#FFFFFF',
      hover: 'rgb(158, 158, 247, 0.1)'
    }
  }
});

export default theme;
