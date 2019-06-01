import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link} from 'react-router-dom';
import {updateCurrentGame} from '../Actions';


class GameItem extends Component{

    setRedirect = () => {
        this.props.updateCurrentGame(this.props.game);
        return null;
    }
    render(){
        const {game} = this.props;
        return (
            <tr>
                    <td>{game.Rank}</td>
                    <td className="title"> <Link to="/GamePage"><span onClick={this.setRedirect}>{game.Name}<i className="fa fa-external-link-square" aria-hidden="true"></i></span></Link></td>
                    <td>{game.Platform}</td>
                    <td>{game.Year}</td>
                    <td>{game.Genre}</td>

            </tr>
        );
    }
}


export default connect(null, {updateCurrentGame})(GameItem);
