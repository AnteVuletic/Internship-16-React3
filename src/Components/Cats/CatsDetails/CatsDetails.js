import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCat } from '../../../Services/CatServices';
import './CatsDetails.css';

class CatsDetails extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            cat : {}
        }
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        fetchCat(id).then(payload =>{
            this.setState({
                cat : payload
            });
        });
    }
    render(){
        const { cat } = this.state;
        return (
            <article className="catDetail">
                <h1>{cat.name}</h1>
                <span>ID: {cat.id}</span>
                <span>Breed: {cat.breed}</span>
                <span>Age: {cat.age}</span>
            </article>
        );
    }
}
export default CatsDetails;