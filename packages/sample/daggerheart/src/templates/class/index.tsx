import { useContext } from 'react';
import { clsx } from 'clsx';

import ThemeContext from '../../context/theme';
import { steps } from '../../data';
import DefaultLayout from '../../layouts/DefaultLayout';
import Steps from '../../components/Steps';

import './style.scss';

const Class = () => {
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

export default Class;
