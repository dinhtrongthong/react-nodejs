import './App.scss'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'

function App() {

  return (
    <div className="App">
      <Router>
      <Link to="/create-post">Create a Post </Link>
      <Link to="/">Home </Link>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create-post" exact element={<CreatePost />} />
          <Route path="/post/byId/:id" exact element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
