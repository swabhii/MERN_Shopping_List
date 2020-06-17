import React from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShopingList';
import { Provider } from 'react-redux';
import store from './store';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    
       <AppNavbar></AppNavbar>
       <ShoppingList></ShoppingList>
       
    </div>
    </Provider>
  );
}

export default App;
