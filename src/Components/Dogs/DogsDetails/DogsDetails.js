import React from 'react';
import { Link } from 'react-router-dom';
import { fetchDog,deleteDog } from '../../../Services/DogServices';
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
    handleDelete = () =>{
        const { dog } = this.state;
        const { history } = this.props;
        deleteDog(dog.id).then(_ => {
            history.goBack();
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
                <div>
                    <Link to={`/dogs/update/${dog.id}`}>Edit</Link>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            </article>
        );
    }
}
export default DogsDetails;