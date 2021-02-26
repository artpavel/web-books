import React from 'react'
import cl from './App.css';
import Header from "./components/Header/Header";
import {Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Books from "./components/Books/Books";
import News from "./components/News/News";
import Testi from "./components/Testi/Testi";
import Contacts from "./components/Contacts/Contacts";


function App(props) {
    return (
        <div className={cl.app}>

            <Header state = { props.state.header }/>

            <div className="container app">
                <Route path='/home' render={() =>
                    <Home />}/>
                <Route path='/aboutMe' render={() =>
                    <AboutMe/>}/>
                <Route path='/books' render={() =>
                    <Books/>}/>
                <Route path='/news' render={() =>
                    <News/>}/>
                <Route path='/testimonials' render={() =>
                    <Testi/>}/>
                <Route path='/contacts' render={() =>
                    <Contacts/>}/>
            </div>

        </div>
    );
}


export default App;
