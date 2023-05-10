
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './Layout/Main';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Posts from './components/Posts/Posts';
import Contact from './components/Contact/Contact';
import FriendDetails from './components/FriendDetails/FriendDetails';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
   
    {path:"/", element: <Main></Main>,

    children:[
      {path:"home", element: <Home></Home>},
      {path:"about", element: <About></About>},
      {path:"friends", element: <Friends></Friends>,
      loader: async()=>{
        return fetch("https://jsonplaceholder.typicode.com/users")
      },
      
      },
      {
      path:"friend/:friendId", element:<FriendDetails></FriendDetails>,
      loader: async({params})=>{
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      },
      {path:"posts", element: <Posts></Posts>,
      loader:async()=>{
        return fetch("https://jsonplaceholder.typicode.com/posts")
      },
      },
      {
      path:"post/:postId", element: <PostDetails></PostDetails>,
      loader: async({params})=>{
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      }
    ]
  
    },
    
    {path:"contact", element: <Contact></Contact>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
