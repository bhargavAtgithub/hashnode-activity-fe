/**
 * Base layout for all the pages.
 * Renders:
 *  - Header
 *  - Main
 */

import React, { useContext } from 'react';
import Link from 'next/link';

import { useTheme } from 'styled-components';
import useApp from '../services/app/useApp';
import useActivities from '../components/activities/useActivities';

import LayoutContainer from './containers/LayoutContainer';
import Header from './containers/header';
import Main from './containers/main';
import Footer from './containers/footer';
import { Moon, Sun } from '../icons';

import { Text, Button, Spacer } from '../components/UI';

const BaseLayout = ({ children }) => {
  const theme = useTheme();
  const app = useApp();
  const activities = useActivities();

  return (
    <LayoutContainer>
      <Header>
        <Link href={'/activity'} passHref>
          <a>
            <Text size={['lg']} weight={'b'} cursor="pointer">
              Hashnode
            </Text>
          </a>
        </Link>
        <Spacer>
          <Button
            title={'Write'}
            onClick={async () => {
              const writeActivity = await app.createRandomPost();
              activities.insertNewActivity(writeActivity);
            }}
          />
          <Spacer />
          <Button
            onClick={() => theme.toggleTheme()}
            icon={theme.darkMode ? <Sun /> : <Moon />}
            id="toggle-dark-mode"
          />
        </Spacer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Text size={['mi']}>Hashnode mini activity feed</Text>
      </Footer>
    </LayoutContainer>
  );
};

export default BaseLayout;
