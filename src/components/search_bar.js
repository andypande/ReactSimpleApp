import React, { Component } from 'react'; //Need to import React into any component that has JSX 

//SearchBar below is called a functional component - because it is literally a javascript function that returns some JSX
// const SearchBar = () => {
//     return <input />
// }

//Another type of React Component is a class component - a class component has the ability to be aware of itself and know what has happened to the component
//since it has been rendered. SearchBar component needs to be able to tell rest of application what user typed into it so it shouuld be a class component
class SearchBar extends Component { //Define a new class SearchBar and give it access to all functionality from React.Component class
    constructor(props){
    //Below code is how we define state in a class based component
        //Component React class that is being extended above has it's own constructor function. By calling super in our constructor function, we can call
        //the constructor function for the react Component class. Component is our parent class which we have access to.
        super(props);

        //Creates a state object that has a term property which will record change on input value put in by user . Term means 'Search Term'.
        //Whenver you want to update your component is some fashion, will usually be using state to update
        this.state = { term: '' }; //Only inside constructor function, we change state by writing this.state = ...

        this.onInputChange = this.onInputChange.bind(this);
    }
    
    render() {
        //In code below - when we set input value to this.state.term we turn our input into a controlled component
        //A controlled component has it's value set by state
        return (
        <div className="search-bar">
        {/* //this.onInputChange is a reference to the event handler below, which must be wrapped in curly braces */}
            <input 
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
        </div>
        );
    }

    //Event handler method that will handle changes to input above
    //event parameter describes context of event that occured - just like event object that is passed in Jquery functions
    onInputChange(term) {
        this.setState({ term }); //this.setState is used everywhere we want to change state in our application
        this.props.onSearchTermChanges(term);
    }
}


export default SearchBar; //Since all components are silo'd off from each other - in order for other components to be able 
// to import the SearchBar component, we must explicitly export the SearchBar component

//STATE in REACT
//State is a plain javascript object that is used to record and react to user events. Each class based component like the one defined above 
//has it's own state object. Whenever a component's state is changed, the component immidiately re-renders and forces all of it's children
//to re-render as well