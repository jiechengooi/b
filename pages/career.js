import React from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Layout from "../components/Layout";


const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Career</title>
        <meta
          name="description"
          key="description"
          content=""
        />
        <meta
          property="og:title"
          content=""
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/mobileapps" />
        <link rel="canonical" key="canonical" href="/mobileapps" />
      </Head>
      <Layout title="About">
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        {/* Main Contents */}
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h1"
              style={{
                lineHeight: matchesXS ? 1.1 : null,
                marginBottom: matchesXS ? "0.5em" : null,
                fontSize: "2.25em",
              }}
            >
              Career at our boutique
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              At our boutique, you can always have a stable career.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Our business is expanding. We offer permanent position to our employee, where the best benefit package is always offer to every single associate.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              We emphasize on family, life, and career. Any interested candidates, please email to our HR(hr@boutique.com.my)
            </Typography>
          </Grid>
          </Grid>

        </Grid>
        <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "center"}
              variant="h4"
              gutterBottom
            >
              Florist vacancy
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "center"}
              variant="body1"
              paragraph
            >
              <p>Job Description:</p>
              A florist should also have the knowledge about a wide range of floral designs, flowers, foliage along with their seasonal availability and how long they will.Recommended Minimum Requirements is high school diploma.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <img src="/assets/career.jpg" alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "center"}
              variant="h4"
              gutterBottom
            >
            Administrator   
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "center"}
              variant="body1"
              paragraph
            >
              <p>Job Description:</p>
              In this role you will complete the level 3 apprenticeship and apply the knowledge, skills, and experience to the workplace with the support of the manager, team, and training provider as well as the Group’s internal Academy.Recommended Minimum Requirement is Bachelor level.
            </Typography>
          </Grid>
        </Grid>
        </Grid>
      </Layout>
    </Grid>
    
  )
            }