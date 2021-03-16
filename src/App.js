import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth }  from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51IOFn1DuYFlBiGFm8Uq0BZBbjOhZdjSReSyK3lSGfzsRD8tz8i6z3PHGRBKDoQfki2snHJVb5RPSemh1XP9M3Bwk005mejCk2O');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      if(authUser) {
          dispatch({
          type: 'SET_USER',
          user: authUser
          })
      }else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path='/orders'>
          <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
           <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
             <Elements stripe={promise}>
                <Payment />
            </Elements>
          </Route>
          <Route path='/'>
             <Header />
             <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
