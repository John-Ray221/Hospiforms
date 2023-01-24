import './App.css';
import {
  ReactLocation,
  Router
} from "@tanstack/react-location";
import Header from './Components/Layout/Header';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import FormBuilder from './Pages/FormBuilder/FormBuilder';
import Dashboard from './Pages/Dashboard/Dashboard';
function App() {
  const location = new ReactLocation()
  const routes = [
    {
      path: '/login',
      element: <Login/>
    },{
      path: '/signup',
      element: <Signup/>
    },{
      path: '/formbuilder',
      element: <FormBuilder/>
    },{
      path:'/dashboard',
      element: <Dashboard/>
    }
  ]
  
  return (
   
    <div className="App">
      <Header/>
      <Router location={location} routes={routes} />
    </div>
  );
}

export default App;
