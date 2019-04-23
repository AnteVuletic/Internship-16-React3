import React from 'react';
import { Link } from 'react-router-dom';
import { fetchDog } from '../../../Services/DogServices';
import './DogsDetails.css';

class DogsDetails extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            dog : {}
        }
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        fetchDog(id).then(payload =>{
            this.setState({
                dog : payload
            });
        });
    }
    render(){
        const { dog } = this.state;
        return (
            <article className="dogDetail">
                <h1>{dog.name}</h1>
                <span>ID: {dog.id}</span>
                <span>Breed: {dog.breed}</span>
                <span>Age: {dog.age}</span>
            </article>
        );
    }
}
export default DogsDetails;