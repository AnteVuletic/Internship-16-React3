import React from 'react';
import { postDog } from '../../../Services/DogServices';
import './DogsCreate.css';

class DogsCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newDog: {
                name: '',
                breed: '',
                age: 0
            }
        };
    }
    handleInputChange = (event) => {
        const target = event.target;
        this.setState((prevState)=>{
            return {
                newDog: {
                    ...prevState.newDog,
                    [target.name] : target.value
                }
            }
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        postDog(this.state.newDog)
            .then(response => history.push(`/dogs/${response.id}`));
    }
    handleCancel = () =>{
        const { history } = this.props;
        history.push('/dogs');
    }
    render() {
        const { newDog } = this.state;
        return (
            <div className="dogCreate">
                <h1>New dog:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" value={newDog.name} onChange={(e) => this.handleInputChange(e)} required />
                    <label>Breed:</label>
                    <input name="breed" type="text" value={newDog.breed} onChange={(e) => this.handleInputChange(e)} required />
                    <label>Age:</label>
                    <input name="age" type="number" min="0" max="25" value={newDog.age} onChange={(e) => this.handleInputChange(e)} required />
                    <div>
                        <input type="submit" value="Submit" />
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default DogsCreate;