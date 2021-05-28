/* import Material-ui */
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  cardContent: {
    marginTop: 25
  },
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  name: {
    fontSize: '1em'
  },
  subTitle: {
    fontSize: '0.8em'
  }
}));

export default function CardComponent(props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} className={classes.cardContent}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={data.image}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className={classes.name}>
              { data.name }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" className={classes.subTitle}>
              { data.gender }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" className={classes.subTitle}>
              { data.origin.name.length > 20 ?  `${data.origin.name.substring(0, 20)}...` :  data.origin.name}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}