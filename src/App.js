import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { lazy, Suspense } from 'react';
import ShimmerUI from './components/ShimmerUI';
import WatchPage from './components/WatchPage';

 const MainContainer = lazy(() => import("./components/MainContainer"));

function App() {
const appRouter = createBrowserRouter([{ // will render where the RouterProvider is
  path: "/",
  element: <Body />,
  children: [ //will go where my Outlet is
  {
    path: "/",
    element: (
    <Suspense fallback={<ShimmerUI />}>
      <MainContainer />
    </Suspense>
    ),
  },
  {
    path: "watch",
    element: <WatchPage />,
  }
  ]
}])

  return (
    <Provider store={store}>
    <div className="">
      <Head />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
