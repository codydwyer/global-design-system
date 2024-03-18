import { useContext } from 'react';
import { clsx } from 'clsx';

import ThemeContext from '../../context/theme';
import DefaultLayout from '../../layouts/DefaultLayout';

import './style.scss';
import TabContext from '../../components/Tabs/TabContext';

const CharacterTemplate = () => {
  const { theme } = useContext(ThemeContext);
  const classes = clsx(theme, 'main');

  return (
    <DefaultLayout>
      <div className={classes}></div>
      <TabContext tabs={tabs} />
    </DefaultLayout>
  );
};

export default CharacterTemplate;
