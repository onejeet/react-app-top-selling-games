import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import Header from './Header';
import {updateCurrentGame} from '../Actions';


class GamePage extends Component{

    render(){
        const {theme, game} = this.props;
        if(game === {}){
            return <Redirect to='/'/>;
        }
        return (
            <div className={theme}>
                <div className="app">
                    <Header/>
                    <div className="game-page">
                    <Link to="/" ><button> Go to Home Page</button></Link>
                        <h1> {game.Name} </h1>
                        <div className="details">
                            <p>Rank: {game.Rank}</p>
                            <p>Name: {game.Name}</p>
                            <p>Platform: {game.Platform}</p>
                            <p>Year: {game.Year}</p>
                            <p>Genre: {game.Genre}</p>
                            <p>Publisher: {game.Publisher}</p>
                            <p>Global Sales: {game.Global_Sales}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        theme:state.theme,
        game: state.game
    }
}

export default connect(mapStateToProps, {updateCurrentGame})(GamePage);
