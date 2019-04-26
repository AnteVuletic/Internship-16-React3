import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCat,deleteCat } from '../../../Services/CatServices';
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
        const { history } = this.props;
        fetchCat(id).then(payload =>{
            let isFound = payload.id ? true : false;
            if(!isFound)
                return history.push('/404');
            this.setState({
                cat : payload
            });
        });
    }
    handleDelete = () =>{
        const { cat } = this.state;
        const { history } = this.props;
        deleteCat(cat.id).then(_ => {
            history.push('/cats');
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
                <div>
                    <Link to={`/cats/update/${cat.id}`}>Edit</Link>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            </article>
        );
    }
}
export default CatsDetails;