import { useContext } from 'react'
import {clsx} from 'clsx';

import ThemeContext from '../context/theme'
import { steps } from '../data'
import Steps from '../components/Steps'

import './style.css'

const App = () => {
  const {theme} = useContext(ThemeContext)
  const classes = clsx(theme, 'main');

  return (
    <div className={classes}>
     <h1>Daggerheart</h1>
     <Steps steps={steps} />
    </div>
  )
};

export default App;
