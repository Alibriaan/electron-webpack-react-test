import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
// import { IconButton } from '@material-ui/core';
import { ITheme } from '../style/theme/index';
import Footer from '../components/Footer/Footer';
import { IconButton, useTheme } from '@mui/material';

const MainFooter: React.FC = () => {
  const theme: ITheme = useTheme();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(-1);

  const [footerNavigation] = useState([
    {
      name: 'Time',
      link: '/time',
      icon: ['far', 'clock'],
    },
    {
      name: 'Calendar',
      link: '/calendar',
      icon: ['far', 'calendar-alt'],
    },
    {
      name: 'Weather',
      link: '/weather',
      icon: ['fas', 'cloud'],
    },
    {
      name: 'todo-list',
      link: '/todo',
      icon: ['fas', 'list-ul'],
    },
  ]);

  useEffect(() => {
    const indexOfCurrentLink = footerNavigation.findIndex(
      (item) => item.link === location.pathname
    );

    if (indexOfCurrentLink !== -1) {
      setActiveLink(indexOfCurrentLink);
    }
  }, [location]);

  const getNavigationColor = (index: number) => {
    return index === activeLink
      ? theme.palette.primary.dark
      : theme.palette.primary.disabled;
  };

  return (
    <Footer classes="bottom-footer">
      <>
        {footerNavigation.map((item, index) => {
          return (
            <IconButton size="medium" key={index.toString()}>
              <Link to={item.link}>
                <FontAwesomeIcon
                  icon={item.icon as IconProp}
                  color={getNavigationColor(index)}
                />
              </Link>
            </IconButton>
          );
        })}
      </>
    </Footer>
  );
}

export default MainFooter;

