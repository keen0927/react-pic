import React from 'react';
import axios from 'axios';
import { SearchBar } from './SearchBar';


class App extends React.Component {

    onSearchSubmit(term) {
        
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 04397743cc9fb9dafd66250ea77a69a6f99f005bb6e556345cc94d7668ff0b21'
            }
        });
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>  
        );
    }
};

export default App;