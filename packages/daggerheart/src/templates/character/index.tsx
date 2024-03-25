import { useContext } from 'react';
import { clsx } from 'clsx';
import TabsContext from '@global-design-system/react-components/dist/components/Tabs/Context/';

import ThemeContext from '../../context/theme';
import DefaultLayout from '../../layouts/DefaultLayout';

import './style.scss';
import schema from './schema';

const CharacterTemplate = () => {
  const { theme } = useContext(ThemeContext);
  const classes = clsx(theme, 'main');

  return (
    <DefaultLayout>
      <div className={classes}></div>
      <TabsContext {...schema} />
    </DefaultLayout>
  );
};

export default CharacterTemplate;
