import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '~/context';
import {
  RootPage,
  BuilderPage,
  ClassPage,
  ErrorPage,
  EditorPage,
  CharacterPage,
  CharacterListPage,
  DomainsPage,
} from '../pages';

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
    path: 'characters',
    element: <CharacterListPage />,
  },
  {
    path: 'character/:characterId',
    element: <CharacterPage />,
  },
  {
    path: 'builder/:characterId',
    element: <BuilderPage />,
  },
  {
    path: 'builder',
    element: <BuilderPage />,
  },
  {
    path: 'editor',
    element: <EditorPage />,
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
