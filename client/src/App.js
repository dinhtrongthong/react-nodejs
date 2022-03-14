import './App.scss'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'
import Login from './pages/Login'
import Registration from './pages/Registration'

function App() {

  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link to="/">Home </Link>
          <Link to="/create-post">Create a Post </Link>
          <Link to="/login">Login </Link>
          <Link to="/registration">Registration </Link>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create-post" exact element={<CreatePost />} />
          <Route path="/post/byId/:id" exact element={<Post />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/registration" exact element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
