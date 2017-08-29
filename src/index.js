import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAQpbHkmRgGTpCn6Lb0xb79YQglw-G3Pp4';


//new component
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

//Take the component to the dom
ReactDom.render(<App/>, document.querySelector('.container'));