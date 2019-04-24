import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DogsList from './DogsList/DogsList';
import DogsDetails from './DogsDetails/DogsDetails';
import DogsCreate from './DogsCreate/DogsCreate';
import DogsUpdate from './DogsUpdate';

export default _ =>{
    return (
        <div>
            <Switch>
                <Route exact path="/dogs" render={props => <DogsList {...props}/>} />
                <Route exact path="/dogs/create" render={props => <DogsCreate {...props}/>} />
                <Route exact path="/dogs/:id" render={props => <DogsDetails {...props}/>} />
                <Route exact path="/dogs/update/:id" render={props => <DogsUpdate {...props}/>} />
            </Switch>
        </div>
    );
}