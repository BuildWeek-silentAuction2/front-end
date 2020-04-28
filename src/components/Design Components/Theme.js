import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const Theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#FFD700',
    },
  },
});

export default Theme;