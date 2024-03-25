import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '~/context';
import { RootPage, ClassPage, ErrorPage, CharacterPage, DomainsPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'class',
    element: <ClassPage />,
  },
  {
    path: 'class/:classId',
    element: <ClassPage />,
  },
  {
    path: 'character/',
    element: <CharacterPage />,
  },
  {
    path: 'character/:characterId',
    element: <CharacterPage />,
  },
  {
    path: 'domains',
    element: <DomainsPage />,
  },
]);

import StoreProvider from './store';

const App = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
