import React,{memo} from 'react';
import {Routes,Route} from 'react-router-dom';
import Header from './common/Header';
import Main from './pages/Main';
import Chef from './pages/Main/Chef';
import Footer from './common/Footer';

const App = memo(() => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Main />} />
        <Route path='/chef' element={<Chef />} />
      </Routes>
      <Footer />
    </div>
  );
});

export default App;