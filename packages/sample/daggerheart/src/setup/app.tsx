import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootPage, ClassPage, ErrorPage, CharacterPage } from '../pages';

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
]);

import StoreProvider from './store';

const App = () => {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
};

export default App;
