import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import jstz from 'jstimezonedetect';
import moment from 'moment';
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ForecastResponse, WeatherResponse } from '../../api/models/weatherResponse';
import { fetchWeather } from '../../api/repository/weatherRepository';
import AppContext from "../../AppContext";
import { VIVSOFT_TITLE } from "../../constants";
import Spinner from "../Spinner";
import { ChartDatatype } from './Chart';
import vertical_logo from './vertical_logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(5),
      paddingRight: theme.spacing(18),
      paddingLeft: theme.spacing(16)
    },
    img: {
      paddingLeft: theme.spacing(5),
      marginTop: theme.spacing(5),
      
    }
  }));

const ChartContainer: React.FC = () => {

  const classes = useStyles();
  const [t] = useTranslation(); //for internationalization
  const Chart = React.lazy(() => import('./Chart')); //code-splitting implemented using lazy loading of component.
  const [data, setData] = useState<WeatherResponse>();
  const [loading, setLoading] = useState(true);
  const context = React.useContext(AppContext); //refreshRate of the app comes from the AppContext, making it configurable.

  const makeApiCall = () => {
    setLoading(false);
    fetchWeather()
      .then((resp) => {
        setLoading(false);
        setData(resp)
      });
  }

  useEffect(() => {
    var handle = setInterval(makeApiCall, context.refreshRate);
    return () => {
      clearInterval(handle);
    }
  }, [loading]);

  const chartData = () => {
    if (data) {
      let tz = jstz.determine().name();
      //any dynamic timezone can be provided by passing the tz value, since the weatherApi forecasts for America/New_York, using the same
      let options = {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      },
      formatter = new Intl.DateTimeFormat([], options);
      let currentTime = moment(formatter.format(new Date())).format('HH');
      let current = data.forecast.filter((time) => parseInt(moment(time.time).format('HH')) >= parseInt(currentTime));
      const dataToDisplay: ChartDatatype[] = current.map((timeAndTemp: ForecastResponse, index: number) => {
        let dataPoint = { "name": moment(timeAndTemp.time).format('HH:mm'), "temp": timeAndTemp.tempF };
        if (index === 0) {
          dataPoint = { "name": "Current", "temp": timeAndTemp.tempF };
        }

        return dataPoint;
      });
      return dataToDisplay;
    }
  }

  return (
    <>
      {loading ? <Spinner /> : <>
        
        <Typography variant="h6" align={'center'} >
          <img
              src={vertical_logo}
              alt="logo"
              width="80"
              height="30"
              className = {classes.img}
            /> <span className={classes.label}>{t(VIVSOFT_TITLE)}</span>
            </Typography>
        <div style={{
          paddingBottom: '56.25%', /* 16:9 */
          position: 'relative',
          height: 0
        }} >
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
          }}>
            <Chart chartData={chartData()} dataKeyName={"temp"} />
          </div>
        </div>
      </>}
    </>
  )
};
export default ChartContainer;

