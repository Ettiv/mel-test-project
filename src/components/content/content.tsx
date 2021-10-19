import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import CharacterList from "./charactersList/characterList";
import FavoritCharacters from "./favoritCharacters/favoritCharacters";
import './content.css';
import Character from "./character/character";

class Content extends Component {
    render() {
        return (
            <div className='container-xl content-height'>
                <Switch>
                    <Route path='/' exact component={CharacterList}/>
                    <Route path='/favorits' component={FavoritCharacters}/>
                    <Route path='/character/:name' component={Character}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        );
    }
}

export default Content;