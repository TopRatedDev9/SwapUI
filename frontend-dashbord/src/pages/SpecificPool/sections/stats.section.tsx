import React from 'react'
import { Box, Grid, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import cx from 'classnames'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

import { useIsDarkMode } from 'state/user/hooks'

const useStyles = makeStyles(({ palette }) => ({
  root: {},
  panelbg: {
    background: palette.background.paper,
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
    height: '100%'
  },
  title: {
    fontFamily: 'Brandon Grotesque',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '18px',
    lineHeight: '110%',
    color: palette.secondary.main
  },

  token: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0px',

    fontFamily: 'Museo Sans',
    fontStyle: 'normal',
    fontWeight: 900,
    lineHeight: '115%',
    color: palette.secondary.main,

    '& > img': {
      width: '35px',
      height: '35px'
    },

    '& > span:first-of-type': {
      paddingLeft: '10px',
      fontSize: '12px',
      flexGrow: 5
    },
    '& > span:last-of-type': {
      fontSize: '11px'
    }
  },

  statsBoxBg: {
    background: palette.type === 'light' ? '#F5F5F5' : '#25308280',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px'
  },
  statsBox: {
    position: 'relative',
    padding: '10px 30px',
    margin: '20px 0px',

    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Museo Sans',
    fontStyle: 'normal',
    lineHeight: '100%',

    '& > span:nth-of-type(1)': {
      color: palette.text.hint,
      fontSize: '11px',
      fontWeight: 300
    },
    '& > span:nth-of-type(2)': {
      color: palette.secondary.main,
      fontSize: '17px',
      margin: '10px 0px',
      fontWeight: 500
    },
    '& > span:nth-of-type(3)': {
      fontWeight: 300,
      fontSize: '14px'
    }
  },
  leftBorder: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    background: palette.info.dark,
    borderRadius: '10px',
    fontFamily: 'auto'
  }
}))

const StatsSection: React.FC = () => {
  const { palette, breakpoints } = useTheme()
  const dark = useIsDarkMode()
  const mobile = useMediaQuery(breakpoints.down('xs'))
  const classes = useStyles({ dark, mobile })

  const options: ApexOptions = {
    chart: {
      id: 'basic-bar',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: 0,
      curve: 'smooth'
    },
    xaxis: {
      categories: ['APR 20', 'MAY 15', 'JUN 02'],
      labels: {
        style: {
          colors: [palette.text.hint, palette.text.hint, palette.text.hint],
          fontSize: '11px',
          fontFamily: 'Museo Sans',
          fontWeight: 500
        }
      },
      tickPlacement: 'between'
    },
    yaxis: {
      labels: {
        show: true,
        align: 'left',
        style: {
          colors: [palette.secondary.main],
          fontFamily: 'Museo Sans',
          fontWeight: 'bold',
          fontSize: '16px',
          cssClass: 'apexcharts-yaxis-label'
        },
        formatter: (value: any) => {
          return '$' + value + (value ? ' M' : '')
        }
      }
    },
    fill: {
      type: 'gradient',
      colors: [!dark ? '#202F9A' : '#73d6f1'],
      gradient: {
        type: 'vertical', // The gradient in the horizontal direction
        gradientToColors: [!dark ? '#5F72FF' : '#73D6F1'], // The color at the end of the gradient
        opacityFrom: 1, // transparency
        opacityTo: 0.3,
        stops: [0, 1200]
      }
    },
    grid: {
      show: false
    },
    plotOptions: {
      bar: {
        borderRadius: 5
      }
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    }
  }

  const series = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]

  const lockedTokenList = [
    {
      name: 'BTC',
      amount: '$22.62 M'
    },
    {
      name: 'ARD',
      amount: '$22.62 M'
    }
  ]

  return (
    <Box className={cx(classes.root)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box className={cx(classes.title)}>Total Tokens Locked</Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box className={cx(classes.title)}>Trade Volume Graph</Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box className={cx(classes.panelbg)}>
            <Box
              className={cx(classes.statsBoxBg)}
              paddingX='25px'
              paddingY='15px'
            >
              {lockedTokenList &&
                lockedTokenList.map((token: any, i: number) => {
                  const icon = require(`assets/coins/${token.name}.png`).default
                  return (
                    <Box className={cx(classes.token)} key={i}>
                      <img src={icon} alt='token' />
                      <span>{token.name}</span>
                      <span>{token.amount}</span>
                    </Box>
                  )
                })}
            </Box>
            <Box className={cx(classes.statsBox, classes.statsBoxBg)}>
              <Box className={cx(classes.leftBorder)}>&nbsp;&nbsp;</Box>
              <span>TVL</span>
              <span>$242.90m</span>
              <Box style={{ color: 'red' }}>
                <i className='fal fa-long-arrow-down'></i>&nbsp;
                <span>2.05%</span>
              </Box>
            </Box>

            <Box className={cx(classes.statsBox, classes.statsBoxBg)}>
              <Box className={cx(classes.leftBorder)}>&nbsp;&nbsp;</Box>
              <span>VOLUME 24H</span>
              <span>$88.30m</span>
              <Box style={{ color: 'green' }}>
                <i className='fal fa-long-arrow-up'></i>&nbsp;
                <span>36.12%</span>
              </Box>
            </Box>

            <Box className={cx(classes.statsBox, classes.statsBoxBg)}>
              <Box className={cx(classes.leftBorder)}>&nbsp;&nbsp;</Box>
              <span>24H FEES</span>
              <span>$264.89K</span>
              <span style={{ color: 'red' }}>&nbsp;</span>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box className={cx(classes.panelbg)}>
            <Chart options={options} series={series} type='bar' width='100%' />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default StatsSection
