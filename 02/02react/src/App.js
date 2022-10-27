import React,{memo} from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Main from './pages/Main';
import Project from './pages/Main/Project';
import About from './pages/Main/About';
import Contact from './pages/Main/Contact';

const App = memo(() => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact={true} element={<Main />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
});

export default App;