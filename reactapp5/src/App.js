
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Users from './pages/Users';
import NewUsers from './pages/NewUsers';

function App() {
  return (

    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/users' element={<Users />} />
        <Route path='/new_user' element={<NewUsers />} />
      </Routes>
    </div>

  );
}


export default App;
