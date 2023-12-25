import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{ // will render where the RouterProvider is
  path: "/",
  element: <Body />,
  children: [ //will go where my Outlet is
  {
    path: "/",
    element: <MainContainer />,
  },
  {
    path: "watch",
    element: <WatchPage />
  }
  ]
}])

function App() {
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
