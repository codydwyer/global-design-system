import { useContext } from 'react';
import ThemeContext from '~/context/theme';
import { Toggle } from '@global-design-system/react-components/';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Toggle
      id="theme-switcher"
      className="theme-switcher"
      onToggle={setTheme}
      onValue="dark"
      offValue="light"
      defaultState={theme}
    />
  );
};

export default ThemeSwitcher;
