import React from 'react';
import { putCat, fetchCat } from '../../Services/CatServices';
import './CatsCreate/CatsCreate.css';

class CatsUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: {
                id: 0,
                name: '',
                breed: '',
                age: 0
            }
        };
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        fetchCat(id).then(response => this.setState({ cat : {...response}}))
    }
    handleInputChange = (event) => {
        const target = event.target;
        this.setState((prevState)=>{
            return {
                cat: {
                    ...prevState.cat,
                    [target.name] : target.value
                }
            }
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        putCat(this.state.cat)
            .then(response => history.push(`/cats/${response.id}`));
    }
    handleCancel = () =>{
        const { history } = this.props;
        history.push('/cats');
    }
    render() {
        const { cat } = this.state;
        return (
            <div className="catCreate">
                <h1>Cat:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" value={cat.name} onChange={(e) => this.handleInputChange(e)} required />
                    <label>Breed:</label>
                    <input name="breed" type="text" value={cat.breed} onChange={(e) => this.handleInputChange(e)} required />
                    <label>Age:</label>
                    <input name="age" type="number" min="0" max="25" value={cat.age} onChange={(e) => this.handleInputChange(e)} required />
                    <div>
                        <input type="submit" value="Submit" />
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CatsUpdate;