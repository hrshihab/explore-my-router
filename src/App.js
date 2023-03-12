
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './components/Main/Main';
import Friends from './components/Friends/Friends';
import FriendsDetails from './components/FriendDetails/FriendsDetails';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', 
    element:<Main></Main>,
     children: [
    {path:'home' , element: <Home></Home>},
    {path:'about' , element: <About></About>},
    {path:'products', element:<Products></Products>},
    {path:'*', element: <div>404</div> },
    {
      path:'friends',
      loader: async() => {
        return fetch('https://jsonplaceholder.typicode.com/users');
      },
      element:<Friends></Friends>
    },
    {
      path:'friend/:friendId',
      loader: async({params})=> {
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      element: <FriendsDetails></FriendsDetails>
    }
  ]
  }
    
  ])
  return (
    <div className='App' >
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
