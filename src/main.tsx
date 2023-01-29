import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Home } from './pages/home';
import { Search } from './pages/search/search';
import { FilmDetails } from './pages/film-details/film-details';
import './index.css';

export const store = createStore(rootReducer);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/film/:filmId',
        element: <FilmDetails />,
      },
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
