import React, { useEffect, useState } from 'react';

import theme from '../theme';
import BaseLayout from '../layout';

import GlobalStyles from '../theme/global';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from '../services/app/app.context';
import ActivitiesProvider from '../components/activities/activities.context';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    if (localStorage) {
      localStorage.setItem('dark-theme-preference', !darkMode);
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (localStorage && localStorage.getItem('dark-theme-preference')) {
      setDarkMode(localStorage.getItem('dark-theme-preference'));
    }
  }, []);

  return (
    <ThemeProvider
      theme={{
        mediaQueries: theme.MEDIA_QUERIES,
        colors: darkMode ? theme.DARK_THEME : theme.LIGHT_THEME,
        darkMode: darkMode,
        toggleTheme: toggleTheme,
      }}
    >
      <GlobalStyles />
      <AppProvider>
        <ActivitiesProvider>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </ActivitiesProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
