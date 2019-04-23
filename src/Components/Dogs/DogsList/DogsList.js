import React from 'react';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../../../Services/DogServices';
import './DogsList.css';

class DogsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dogs: []
        }
    }
    componentDidMount(){
        fetchDogs().then(payload =>{
            this.setState({
                dogs : payload
            });
        });
    }
    render(){
        const { dogs } = this.state;
        return(
            <main className="dogsList">
                <h1>All Dogs</h1>
                <section>
                    {dogs.map(dog =>(
                        <div key={dog.id}><Link to={`/dogs/${dog.id}`}>{dog.name} | {dog.breed}</Link></div>
                    ))}
                </section>
            </main>
        )
    }
}
export default DogsList;