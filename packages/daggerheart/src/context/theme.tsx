import { createContext, ReactNode, useState } from 'react';

export type ThemeProps = {
  children?: ReactNode;
};

interface IThemeContext {
  theme: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<IThemeContext>({ theme: 'light' });

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState('light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
