import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {updateQuery, updateTheme} from '../Actions';


class Header extends Component {

    render(){
        const {query, theme} = this.props;
        return (
        <header>
            <div className="head-content">
                <div className="branding">
                    <h1> Top Selling Games of the World</h1>
                </div>
                <div className="controls">
                <div className="searchBar">
                    <input id="search" tabIndex="0" aria-label="Search Games"  placeholder="Search By Name"
                    value={query}
                    onChange={(event) => this.props.updateQuery(event.target.value)}
                    />
                </div>
                <div className="theme">
                    <select name="theme" id="theme"
                    value={theme}
                    onChange={(event) => this.props.updateTheme(event.target.value)}
                    >
                        <option value="light-theme">Light Theme</option>
                        <option value="dark-theme">Dark Theme</option>
                    </select>
                </div>
                </div>
            </div>
        </header>
        );

    }
}
const mapStateToProps = (state) => {
    return {
        theme : state.theme,
        query: state.query
    }
}

export default connect(mapStateToProps, {updateQuery, updateTheme})(Header);
