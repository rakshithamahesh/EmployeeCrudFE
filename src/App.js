import logo from './logo.svg';
import {Switch,Route,BrowserRouter as Router } from  'react-router-dom'
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';


function App() {
  return (
    <div>
        <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route exact path={"/"} component={ListEmployeeComponent}/>
                <Route path={"/employees"} component={ListEmployeeComponent}/>
                <Route path={"/add-employee/:id"} component={CreateEmployeeComponent}/>
              </Switch>
            </div>
          <FooterComponent/>
        </Router>
      </div>
    
  );
}

export default App;
