/**
 * Base layout for all the pages.
 * Renders:
 *  - Header
 *  - Main
 */

import React from 'react';

import { useTheme } from 'styled-components';

import LayoutContainer from './containers/LayoutContainer';
import Header from './containers/header';
import Main from './containers/main';
import { Moon, Sun } from '../icons';

import { Text, Button, Spacer } from '../components/UI';

const BaseLayout = ({ children }) => {
  const theme = useTheme();
  return (
    <LayoutContainer>
      <Header>
        <Text size={['lg']} weight={'b'}>
          Hashnode
        </Text>
        <Spacer>
          <Button title={'Write'} />
          <Spacer />
          <Button
            onClick={() => theme.toggleTheme()}
            icon={theme.darkMode ? <Sun /> : <Moon />}
          />
        </Spacer>
      </Header>
      <Main>{children}</Main>
    </LayoutContainer>
  );
};

export default BaseLayout;
