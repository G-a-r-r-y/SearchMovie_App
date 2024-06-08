import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { apiKey } from "./constants";
import Home from "./Pages/Home";
import Root from "./Pages/Root";
import SingleMovieDetails from "./Pages/SingleMovieDetails";

//Loader functions  -
import { loader as MovieLoader } from "./Pages/Home";
import { loader as SingleMovieLoader } from "./Pages/SingleMovieDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} loader={MovieLoader} />
      <Route
        path="/detail/:imdbId"
        element={<SingleMovieDetails />}
        loader={SingleMovieLoader}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
