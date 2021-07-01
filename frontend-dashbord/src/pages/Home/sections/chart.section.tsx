import React from "react";
import { Box, Container, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import cx from "classnames";

import { useIsDarkMode } from "state/user/hooks";
import { Chart } from "components/Chart";

const useStyles = makeStyles(({ palette }) => ({
  self: {
    background: "unset",
  },

  title: {
    color: palette.primary.main,
    fontFamily: "Brandon Grotesque Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "30px",
    lineHeight: "110%",
  },

  panel: {
    background: palette.background.paper,
    borderRadius: "10px",
    padding: "20px",
  },

  panelFilter: {
    display: "flex",
    justifyContent: "space-between",
    color: palette.secondary.main,
    fontFamily: "Museo Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "100%",
    paddingBottom: "20px",

    "& span": {
      padding: "10px",
      cursor: "pointer",
    },
  },

  panelFilterByType: {},

  panelFilterByDate: {},
}));

const ChartSection: React.FC = () => {
  const { palette, breakpoints } = useTheme();
  const dark = useIsDarkMode();
  const mobile = useMediaQuery(breakpoints.down("xs"));
  const classes = useStyles({ dark, mobile });

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["APR 20", "MAY 15", "JUN 02"],
      labels: {
        style: {
          colors: [
            palette.secondary.main,
            palette.secondary.main,
            palette.secondary.main,
          ],
          fontSize: "13px",
          fontFamily: "Museo Sans",
          fontWeight: 500,
        },
      },
    },
    fill: {
      type: "gradient",
      colors: [!dark ? "#202F9A" : "#73d6f100"],
      gradient: {
        type: "vertical", // The gradient in the horizontal direction
        gradientToColors: [!dark ? "#5F72FF" : "#73D6F1"], // The color at the end of the gradient
        opacityFrom: 1, // transparency
        opacityTo: 1,
        stops: [0, 120],
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10
      }
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <Box className={cx(classes.self)}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Box className={cx(classes.title)}>Volume</Box>
          <Box mt="20px" />
          <Box className={cx(classes.panel)}>
            <Box className={cx(classes.panelFilter)}>
              <Box className={cx(classes.panelFilterByType)}>
                <Box component="span">TOTAL</Box>
                <Box component="span">SWAP</Box>
                <Box component="span">ADD</Box>
                <Box component="span">WITHDRAW</Box>
              </Box>
              <Box className={cx(classes.panelFilterByDate)}>
                <Box component="span">WEEK</Box>
                <Box component="span">ALL</Box>
              </Box>
            </Box>
            <Box>
              <Chart type="bar" options={options} series={series} />
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box className={cx(classes.title)}>Liquidity</Box>
          <Box mt="20px" />
          <Box className={cx(classes.panel)}>
            <Box className={cx(classes.panelFilter)}>
              <Box className={cx(classes.panelFilterByType)}>
                <Box component="span">LIQUIDITY</Box>
                <Box component="span">LP EARNING</Box>
                <Box component="span">BOND EARNING</Box>
                <Box component="span">$RUNE PRICE</Box>
              </Box>
              <Box className={cx(classes.panelFilterByDate)}>
                <Box component="span">WEEK</Box>
                <Box component="span">ALL</Box>
              </Box>
            </Box>
            <Box>
              <Chart type="area" options={options} series={series} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartSection;