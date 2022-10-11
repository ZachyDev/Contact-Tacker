import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Subscription from './components/Subscription';
import Account from './components/Account';
import StaffLogin from './components/StaffLogin';
import ClientLogin from './components/ClientLogin';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import FeaturedDetails from './components/FeaturedDetails';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='order-summary' element={<OrderSummary />}/>
      <Route path='products' element={<Products />}/>
      <Route path='newsletter-subcription' element={<Subscription />}/>
      <Route path='products' element={<Products />}>
        <Route index element={<FeaturedProducts />}/>
        <Route path='featured' element={<FeaturedProducts />}>
          <Route path='featured-product-details/:prodId' element={<FeaturedDetails />}/>
        </Route>
        <Route path='new' element={<NewProducts />} />
      </Route>
      <Route path='*' element={<NoMatch />}/>
      <Route path='account' element={<Account />}>
        <Route path='staff-login' element={<StaffLogin />}/>
        <Route path='client-login' element={<ClientLogin />}/>
      </Route>
      <Route path='users' element={<Users />}/>
      <Route path='users/:userId' element={<UserDetails />}/>
      <Route path='users/admin' element={<Admin />} />
     </Routes>
    </div>
  );
}

export default App;
