import {Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './pages/Search';
import Details from './pages/Details';

import Home from './pages/Home';


function App() {
  return (
    <main>
  
   <Header />

   <Routes>
   <Route path = '/' element ={<Home />} / >
   <Route path = '/search' element ={<Search />} / >
   <Route path = '/details/:id' element ={<Details />} / >
   
   </Routes>
   
    </main>
  
  
  );
}

export default App;
