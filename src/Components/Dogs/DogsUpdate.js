import React from 'react';
import { putDog, fetchDog } from '../../Services/DogServices';
import './DogsCreate/DogsCreate.css';

class DogsUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: {
                id: 0,
                name: '',
                breed: '',
                age: 0
            }
        };
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        fetchDog(id).then(response => this.setState({ dog : {...response}}))
    }
    handleInputChange = (event) => {
        const target = event.target;
        this.setState((prevState)=>{
            return {
                dog: {
                    ...prevState.dog,
                    [target.name] : target.value
                }
            }
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        putDog(this.state.dog)
            .then(response => history.push(`/dogs/${response.id}`));
    }
    handleCancel = () =>{
        const { history } = this.props;
        history.push('/dogs');
    }
    render() {
        const { dog } = this.state;
        return (
            <div className="dogCreate">
                <h1>Dog:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" value={dog.name} onChange={(e) => this.handleInputChange(e)} required />
                    <label>Breed:</label>
                    <input name="breed" type="text" value={dog.breed} onChange={(e) => this.handleInputChange(e)} required />
                    <label>Age:</label>
                    <input name="age" type="number" min="0" max="25" value={dog.age} onChange={(e) => this.handleInputChange(e)} required />
                    <div>
                        <input type="submit" value="Submit" />
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default DogsUpdate;