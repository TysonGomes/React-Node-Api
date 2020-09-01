import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';
export default class Main extends Component{
            
    state = {name: '',
            listname:'',
            item:'',
            listitens: []
     };
     
    

    handleSubmit= async (event) =>{
       
        
        const {item,...state} =this.state
        JSON.stringify(state)
        const res= await api.post('/listas',state);
        
        
        if (res.status===200){
            alert('Cadastrado com sucesso.');
           this.state.name=' ';
           this.state.listname= '';
           this.state.imte='';
        
         };
              
        event.preventDefault();
    }
    handleChange=(event)=> {
        const name = event.target.name;
        const val = event.target.value;
       // this.setState( {name: event.target.value});
        this.setState({[name]: val});

       
        
      }
   // AddChange=(event)=>{
      // const item = event.target.value
      //  this.setState({item: item});
    //}  
    handleAdd=()=>{
        this.setState({
            listitens: this.state.listitens.concat([this.state.item])
          });
        //this.setState({listitens :this.state.listitens.concat({itemlist})});
        console.log(this.state.listitens);
    }
    handleItemRemove=index =>()=>{
           this.setState({
               listitens:  this.state.listitens.filter((item,itemindex)=> itemindex !== index)  
            });

    }
render(){
     //const {list}= this.state;
    return(
         <div className='cad-Form'>
             <form onSubmit ={this.handleSubmit}>
                 <label>
                     Nome:
                     <input type='text' name='name' value={this.state.name}  onChange={this.handleChange} / > <br></br>                 </label> 
                 <label>
                     Nome da Lista:
                     <input type ='text' name='listname' value={this.state.listname} onChange={this.handleChange}/> 
                     <br></br>
                </label>
                 <label>
                     Item da Lista:
                     <input disabled={!this.state.name , !this.state.listname}   type='text' name='item' value={this.state.item} onChange={this.handleChange}/> 
                    
                     <br></br>
                     </label>  
                     <div className='buttons'>
                     <button type='button' disabled={!this.state.name , !this.state.listname} onClick={this.handleAdd}>Adicionar</button>
                     </div>
                     {
                     <div className='list-listaitens'>
                        <h2>  Lista de Itens</h2>
                        <ul>
                        
                        {this.state.listitens.map((item,p) => (
                            
                            <li key={p}><p>{item} 
                            <button type='button' onClick={this.handleItemRemove(p)}> -</button>
                            </p>
                            </li> 
                            
                            ))}
                          </ul>
                                
                       </div>  }
                  
                   
                     
                        
                 <input className='inputButton' type='submit' value='Enviar' />       
             </form>
                  
         </div>
            
    );

}

}
