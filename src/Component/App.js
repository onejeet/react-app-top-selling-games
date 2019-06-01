import React, { Component } from 'react';
import {connect} from 'react-redux';
import Papa from 'papaparse';
import escapeRegExp from 'escape-string-regexp';
import Header from './Header';
import GameList from './GameList';
import csvFile from '../Data/data.csv';
import {updateSorting} from '../Actions';
import '../Sass/style.scss';

class App extends Component{

    componentWillMount() {
        this.getCsvData();
    }

    getCsvData = () => {
        Papa.parse(csvFile, {
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: (result) => {
                this.saveDataToLocalStorage(result.data);
            }
        });
    }
    saveDataToLocalStorage(data) {
         localStorage.setItem('data', JSON.stringify(data));
    }

    getDataFromLocalStorage() {
        let data;
          if (localStorage.hasOwnProperty('data')) {
              data = localStorage.getItem('data');
              data = JSON.parse(data);
          }
        return data;
    }


   filterGameList = () => {
       let gameList = this.getDataFromLocalStorage();
       const {query} = this.props;
       let newGameList;
       if (query){
           const match = new RegExp(escapeRegExp(query),'i');
           newGameList = gameList.filter((game)=>match.test(game.Name));
       }
       else{
         newGameList = gameList;
       }
       return newGameList;
   }

   sortList = (gameList) => {
        const {sorting} = this.props;
        let sortedList;
        if(sorting.value !== ''){
            if(sorting.sort === 'asc'){
                sortedList = gameList.sort(function(obj1, obj2) {
                	return obj1[sorting.value] - obj2[sorting.value];
                });
            }else{
                sortedList = gameList.sort(function(obj1, obj2) {
                	return obj2[sorting.value] - obj1[sorting.value];
                });
            }
        }else{
            sortedList = gameList;
        }
        return sortedList;
    }

    render(){
        let gameList = this.filterGameList();
        gameList = this.sortList(gameList);
        return (
            <div className={this.props.theme}>
                <div className="app">
                    <Header/>
                    <GameList
                    data = {gameList}
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        theme: state.theme,
        sorting : state.sorting,
        query: state.query
    }
}

export default connect(mapStateToProps, {updateSorting})(App);
