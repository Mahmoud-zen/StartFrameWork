import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Port from './component/Port';
import Contact from './component/Contact';
import NotFound from './NotFound';
function App() {

  const routes = createBrowserRouter([
    {
      path: '', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'port', element: <Port></Port> },
        { path: 'contact', element: <Contact></Contact> },
        { path: '*', element: <NotFound></NotFound> }
      ]
    }])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
