import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCats } from '../../../Services/CatServices';
import './CatsList.css';

class CatsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cats: []
        }
    }
    componentDidMount(){
        fetchCats().then(payload =>{
            this.setState({
                cats : payload
            });
        });
    }
    render(){
        const { cats } = this.state;
        return(
            <main className="catsList">
                <h1>All cats</h1>
                <section>
                    {cats.map(cat =>(
                        <div key={cat.id}><Link to={`/cats/${cat.id}`}>{cat.name} | {cat.breed}</Link></div>
                    ))}
                </section>
            </main>
        )
    }
}
export default CatsList;