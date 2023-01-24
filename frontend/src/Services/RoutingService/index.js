import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PokemonListPage from '../../Pages/PokemonList';

const router = createBrowserRouter([
    {
      element: <PokemonListPage />,
      path: "",
    },
  ]);

const RoutingService = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default RoutingService;