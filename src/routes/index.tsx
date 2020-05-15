import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Singin from '../pages/Singin/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Singin} />
  </Switch>
);

export default Routes;
