import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./pages/home";
import Cadlista from './pages/cadlista';
import ListaTodos from './pages/listatodos'

const Routes = () => (
 <BrowserRouter>
    <Switch>
        <Route exact path="/" component ={Home}/>
        <Route path="/Cad" component ={Cadlista}/>
        <Route path="/Listas" component ={ListaTodos}/>
    </Switch>
 </BrowserRouter>


);
export default Routes;