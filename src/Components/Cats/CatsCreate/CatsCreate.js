import React from 'react';
import { postCat } from '../../../Services/CatServices';
import './CatsCreate.css';

class CatsCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCat: {
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
                newCat: {
                    ...prevState.newCat,
                    [target.name] : target.value
                }
            }
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        postCat(this.state.newCat)
            .then(response => history.push(`/cats/${response.id}`));
    }
    handleCancel = () =>{
        const { history } = this.props;
        history.goBack();
    }
    render() {
        const { newCat } = this.state;
        return (
            <div className="catCreate">
                <h1>New cat:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" value={newCat.name} onChange={(e) => this.handleInputChange(e)} required />
                    <label>Breed:</label>
                    <input name="breed" type="text" value={newCat.breed} onChange={(e) => this.handleInputChange(e)} required />
                    <label>Age:</label>
                    <input name="age" type="number" min="0" max="25" value={newCat.age} onChange={(e) => this.handleInputChange(e)} required />
                    <div>
                        <input type="submit" value="Submit" />
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CatsCreate;