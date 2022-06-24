import React from "react"
import {
  Box,
  useMediaQuery,
  Container,
  Typography,
  Grid,
} from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import cx from "classnames"
import ReactPlayer from "react-player"

import { useIsDarkMode } from "state/user/hooks"
import MembersImage from "assets/logos/members.png"

// import BG_VECTEEZY from "assets/backgrounds/vecteezy.png";
import BG_BLUE_RADIAL from "assets/backgrounds/cyan-gradient.png"

const heroVideo =
  "https://background.sfo3.digitaloceanspaces.com/team/output.webm"

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    "position": "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  background: {
    "lineHeight": 0,

    "& > img": {
      width: "100%",
      height: "600px",

      [breakpoints.down("xs")]: {
        height: "400px",
      },
    },
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    // background: "rgba(24, 34, 113, 0.6)",
    background: `url(${BG_BLUE_RADIAL}) top -900px right -900px no-repeat,
      linear-gradient(180deg, rgba(4, 13, 77, 0.7) -43.4%, rgba(50, 3, 111, 0.7) 222.51%)`,

    [breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  title: {
    lineHeight: "100%",
    color: palette.primary.main,

    [`& > span`]: {
      color: palette.secondary.main,
    },
  },

  content: {
    lineHeight: "25px",
    width: "100%",
    marginTop: "30px",

    [breakpoints.down("xs")]: {
      lineHeight: "18.4px",
      marginTop: "15px",
      padding: "0px 10px",
    },
  },
}))

const MainSection: React.FC = () => {
  const { breakpoints } = useTheme()
  const dark = useIsDarkMode()
  const mobile = useMediaQuery(breakpoints.down("xs"))
  const classes = useStyles({ dark, mobile })

  return (
    <Box className={cx(classes.root)}>
      <ReactPlayer
        url={heroVideo}
        playing={true}
        loop={true}
        muted
        width={!mobile ? "100%" : "unset"}
        height={"600px"}
        playbackRate={0.3}
      />
      <Box className={cx(classes.container)}>
        <Container>
          <Box mt="50px" />
          <Grid
            container
            spacing={2}
            direction={!mobile ? "row" : "column-reverse"}
            alignItems="center"
          >
            <Grid item xs={12} md={7}>
              <Typography
                variant="h3"
                component="h3"
                className={cx(classes.title)}
              >
                Ardana has a <br />
                <span>world class</span> team
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                className={cx(classes.content)}
              >
                Our team is comprised of technical talent, early contributors,
                students and ambassadors of reputable companies and blockchain
                projects such as Apple, Microsoft, Barclays, Citi Bank, State
                Street, Mina Protocol, Cardano, the Plutus Pioneers Program and
                Emurgo Academy.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box display="flex" justifyContent={"center"}>
                <img src={MembersImage} alt="team" width="80%" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default MainSection