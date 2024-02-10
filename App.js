import React from 'react'
import { Provider } from 'react-redux';
import store from './Redux/store'
import './i18n'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Products/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ShopItem from './Products/ShopItem';


const App = () => {
 
 
  return (
      <Provider store={store}>
       <div>
        
         <Header/>
        
         <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shops' element={<ShopItem/>}/>
          </Routes>
        </BrowserRouter>
        
         <Footer/>

        </div>
      </Provider>
  )
}
export default App;