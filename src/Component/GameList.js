import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSorting} from '../Actions';
import GameItem from './GameItem';


class GameList extends Component{

    render(){
        const {data,sorting, updateSorting} = this.props;
        let sort = (sorting.sort=== 'asc' ? 'dsc':'asc' );
        
        return (
            <div className="grid" role="grid">
                <table className="game-list container">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Platform</th>
                            <th>Year
                                <button onClick = {() => updateSorting('Year', sort)}>Sort</button>
                            </th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                { data &&
                    this.props.data.map(game => (
                        <GameItem
                        key = {game.Rank}
                        game = {game}
                        />
                    ))
                }
                </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sorting : state.sorting,
    }
}

export default connect(mapStateToProps, {updateSorting})(GameList);
