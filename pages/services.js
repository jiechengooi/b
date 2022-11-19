import React from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Layout from "../components/Layout";



const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "60em",
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
  itemContainer: {
    maxWidth: "50em",
  },
}));

export default function Services() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Layout title="About">
    <Grid container direction="column">
      <Head>
        <title key="title">
          The Boutique
        </title>
        <meta
          name="description"
          key="description"
          content=""
        />
        <meta
          property="og:title"
          content="B"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/customsoftware" />
        <link rel="canonical" key="canonical" href="/customsoftware" />
      </Head>
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
              History of boutique
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
            A boutique is a small retail store that focuses on selling unique items, or items targeted at a niche market. These shops are established to sell a wide range of things, although products like clothing, food, or jewelry are common offerings. Many people associate boutiques with elite, special products, and they may pay a premium for goods purchased there. Many resort towns and areas that cater to wealthy populations have a high concentration of such stores in their shopping districts.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
            A boutique may also be part of a larger department store or shopping center. In this sense, it offers higher end versions of items sold in the general departments of the store, or it sells very specific products with an elite twist. A department store might have a lingerie boutique, for example, using the social cachet of shopping in an elite store to encourage people to buy more undergarments than they might otherwise
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
            In this store, we are going to offer you the online servies where you can purchase any dress with just a finger tips 
            </Typography>
          </Grid>
          <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em", marginBottom: "20em" }}
      >
        {/* Item 1 */}
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "50em" }}
        >
          <Grid item>
            <Typography variant="h4">Man Dress</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/man.jpg" alt="lightbulb" />
          </Grid>
        </Grid>
        {/* Item 2 */}
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "50em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Woman Dress</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/woman.jpg" alt="stopwatch" />
          </Grid>
        </Grid>
        {/* Item 3 */}
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "50em" }}
        >
          <Grid item>
            <Typography variant="h4">Fashion</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/fashion.jpg" alt="cash" />
          </Grid>
        </Grid>
      </Grid>
        </Grid>
    </Grid>
    </Grid>
    </Layout>
  );
}