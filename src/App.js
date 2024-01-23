import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from '../src/utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponents from './components/MainComponents';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  
{

  path: "/",
  element: <Body />,
  children: [
  {
   path: "/",
   element: <MainComponents />
  },
  {
   path: "watch",
   element: <WatchPage />
  },


  ]

 
},

{


},



])

function App() {
  return (
    <Provider store={store} >
   <div>
    <Header />
    <RouterProvider router={appRouter}>
    <Body />
    </RouterProvider>
   </div>
   </Provider>
  );
}

export default App;


/* 

header 
body
sidebar
  MenuItems

maincontainer
  buttonsList
  videoContainer
     videoCard

*/