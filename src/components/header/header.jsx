/* import Material-ui */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

/* import constants */
import { yellow, black } from '../../utils/constants';

const useStyles = makeStyles((_) => ({
  appBar: {
    backgroundColor: yellow,
    color: black
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6">
          Rick y Morty
        </Typography>
      </Toolbar>
    </AppBar>
  );
}