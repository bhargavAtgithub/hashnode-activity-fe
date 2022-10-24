import React, { useState } from 'react';

import theme from '../theme';
import BaseLayout from '../layout';

import GlobalStyles from '../theme/global';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from '../services/app/app.context';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

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
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
