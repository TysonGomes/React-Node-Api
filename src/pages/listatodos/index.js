import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css'
export default class Main extends Component{
    state={
        lists:[],
        listsinfo: {},
        page :1,


    }
    componentDidMount(){
       this.loadLists();

    }
     loadLists= async(page=1)=>{
         const response =await api.get(`/listas?page=${page}`);
         const {docs,...listsinfo}= response.data
         this.setState({lists:docs,listsinfo,page});
     };
     prevPage=()=>{
        const {page,listsinfo}=this.state;
        if(page=== 1)return
        const pageNumber =page-1;
        this.loadLists(pageNumber);
     }
     nextPage=()=>{
        const {page,listsinfo}=this.state;
        if(page=== listsinfo.pages)return
        const pageNumber =page+1;
        this.loadLists(pageNumber);

     }
    render(){
         const {lists,page,listsinfo}=this.state;
        return (
            <div className='lista-list'>
                {lists.map(listas =>(
                    <article key={listas._id}>
                        <strong><h2> {listas.name}</h2></strong> <br/>
                        <strong>{listas.listname}</strong><br/>
                        <p>{listas.listitens}</p>
                    </article>    
                ))}
                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage} >Anterior</button>
                    <button disabled={page===listsinfo.page} onClick={this.nextPage} >Proxima</button>

                </div>
            </div>
        );
    }
}