import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CatsList from './CatsList/CatsList';
import CatsDetails from './CatsDetails';
import CatsDelete from './CatsDelete';
import CatsCreate from './CatsCreate';
import CatsUpdate from './CatsUpdate';

export default _ =>{
    return (
        <div>
            <Switch>
                <Route exact path="/cats" render={props => <CatsList {...props}/>} />
                <Route exact path="/cats/:id" render={props => <CatsDetails {...props}/>} />
                <Route exact path="/cats/create" render={props => <CatsCreate {...props}/>} />
                <Route exact path="/cats/delete/:id" render={props => <CatsDelete {...props}/>} />
                <Route exact path="/cats/update/:id" render={props => <CatsUpdate {...props}/>} />
            </Switch>
        </div>
    );
}