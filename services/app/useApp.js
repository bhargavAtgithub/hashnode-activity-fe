import { useContext } from 'react';

import { AppContext } from './app.context';

const useApp = () => {
  const app = useContext(AppContext);

  return app;
};

export default useApp;
