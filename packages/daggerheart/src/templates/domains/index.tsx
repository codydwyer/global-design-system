import { useContext } from 'react';
import { clsx } from 'clsx';

import ThemeContext from '../../context/theme';
import DefaultLayout from '../../layouts/DefaultLayout';

import './style.scss';

const DomainsTemplate = () => {
  const { theme } = useContext(ThemeContext);
  const classes = clsx(theme, 'main');

  return (
    <DefaultLayout>
      <div className={classes}>
        <h1>Domains</h1>
      </div>
    </DefaultLayout>
  );
};

export default DomainsTemplate;
