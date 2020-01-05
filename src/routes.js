import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Initial from './pages/Initial';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const Routes = createAppContainer (
   createSwitchNavigator ({
      Initial,
      Main,
      Projects,
      Skills
   })
);

export default Routes;
