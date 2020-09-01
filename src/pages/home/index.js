import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './styles.css'
import Cadlist from 'C:/Curso JS/listas/src/pages/cadlista';
export default class Main extends Component{
   
    

  
 
    render(){
        return(
           
            <div className='Home'>
                <strong><h2>Pagina incial do App </h2></strong>
                        <h3>Favor selecionar uma opção abaixo</h3>
                    <div class className='Actions'>
                    <Link to='/Cad' className='Button'>Cadastrar nova lista</Link>
                    <Link to='/Listas' className='Button'>Todas Listas</Link>
                    </div>
            </div>
            
        )}

}
