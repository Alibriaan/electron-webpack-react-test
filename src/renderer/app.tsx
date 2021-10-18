import { ThemeProvider } from '@mui/material';
import GlassContainer from './components/GlassContainer/GlassContainer';
import GlassWeatherContainer from './container/GlassWeatherContainer';
import MainFooter from './container/MainFooter';
import Time from './pages/Time';
import Weather from './pages/Weather';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import theme from './style/theme';
import OsConfigurator from './services/OsConfig';

const App: React.FC = () => {
  const osInformation = new OsConfigurator();

  console.log(osInformation.getCpuInformation());
  console.log(osInformation.getHostName());
  console.log(osInformation.getOperationSystemName());
  console.log(osInformation.getOperationSystemVersion());
  console.log(osInformation.getTotalMemory());


  return (
    // <ThemeProvider theme={theme}>
      <Router>
          <GlassContainer containerSubClass="root-glass-container">
            <Switch>
              <Route exact path="/">
                <Redirect to="/time" />
              </Route>
              <Route path="/weather">
                <GlassWeatherContainer />
              </Route>
              <Route path="/time">
                <Time />
                <Weather />
              </Route>
              <Route path="/date">
                <h2>Date</h2>
              </Route>
              {/* <Route path="*">
                <Redirect to="/time" />
              </Route> */}
            </Switch>
            {/* <MainFooter /> */}
          </GlassContainer>
      </Router>
    /* </ThemeProvider> */
  );
}

ReactDOM.render(<App></App>, document.getElementById('app'));
