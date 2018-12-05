import React, { Component } from 'react'; //In ES6, there is a concept of modules so that whatever is written in one JS file is not accessible to another 
//JS file UNLESS we specifically import the other module into the file we are working on
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //imports the search bar component into index component
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = "AIzaSyCRB73S5ISIohBVeuy22gA39Xj2rYbQW0A";


// Create a new component. This component should produce some HTML - Component below is a functional component - better implementation
// for a base component that needs to be able to pass data to other components is a class component
// const App = () =>{
//     return (
//     <div>
//         <SearchBar />
//     </div>
//     ); 
//     //JSX - subset of javascript that allows us to write what looks like HTML in JS files but is really just javascript
//     //Webpack and babel takes this JSX and translates it to javascript that can be understood by the browser. Real purpose of JSX is to have 
//     //some javascript code that can produce HTML. Can go to Babel.io to see how JSX code is transpiled into ES5 javascript.
// }

//Whenever we change state on a component, that component instantly re-renders along with any child components tied to that component. State is at the component level and each component has it's own state

// Class based component - used whenever we want to have state on our component
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('alpaca');
    }

    // Function to handle user input for searching videos dynamically
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo : videos[0]     
            });
            //Can also use ES6 syntax if your property and value have same name to do this.setState({ videos });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChanges={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                {/* Below code allows us to pass data from the parent component App to the child component videoList using state 
                    array of videos will be passed to child component videoList in a param called props*/}
                <VideoList 
                // If VideoList updates a video using the onVideoSelect method, the selected video is updated in the index component's state
                // VideoList component is passed a property called onVideoSelect as well as a property called videos
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={ this.state.videos} />
            </div>
        )
    }
}


// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container')); //Instead of passing in App to the render function - which is an actual class called App we need to pass in
//an instance of the class App which can be written out as <App></App> in JSX or if there is no content in the <App> tag you can just pass
//a self closing React tag like <App />
//The second argument of the .render function is to associate a DOM element in the index.html file for where we want to render our component instance.
//The .container div is the base root element for the entire REACT App