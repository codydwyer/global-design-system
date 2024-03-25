import { useContext } from 'react';
import { clsx } from 'clsx';
import { Steps } from '@global-design-system/react-components';

import ThemeContext from '../../context/theme';
import { steps } from '../../data';
import DefaultLayout from '../../layouts/DefaultLayout';

import './style.scss';

const ClassTemplate = () => {
  const { theme } = useContext(ThemeContext);
  const classes = clsx(theme, 'main');

  return (
    <DefaultLayout>
      <div className={classes}>
        <h1>Daggerheart</h1>
        <Steps steps={steps} />
      </div>
    </DefaultLayout>
  );
};

export default ClassTemplate;
