import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Cards from "./Cards2";
import TopNav from "./TopNav";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/index.css';
import ButtonToolbar from "react-bootstrap/es/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/es/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/es/ToggleButton";
import Listview from "./Listview";
// import 'https://use.fontawesome.com/fb0cdb711b.js';

function Routing(props) {
    if (props.mode) {
        return <Listview/>
    } else {
        return <Cards/>;
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listMode: false
        };
        this.toList = this.toList.bind(this);
        this.toCards = this.toCards.bind(this);
    }

    toList() {
        this.setState({
            listMode: true
        });
    }

    toCards() {
        this.setState({
            listMode: false
        });
    }

    render() {
        return (
            <div>
                {/*nav*/}
                <TopNav/>

                {/*/!*mode switch*!/*/}
                <div className="nav_toggle-view-bar">
                    <ToggleButtonGroup type="radio" name="options" defaultValue={false}>
                        <ToggleButton value={false} onClick={this.toCards}>
                            <span className="glyph-cards"></span>
                        </ToggleButton>
                        <ToggleButton value={true} onClick={this.toList}>
                            <span className="glyph-table"></span>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>

                {/*route rest of page*/}
                <Routing mode={this.state.listMode}/>
                {/*<Cards className={this.state.listMode ? 'hidden ' : ''}/>*/}
                {/*<Listview className={this.state.listMode ? '' : 'hidden '}/>*/}
            </div>
        );
    }
}

// Put the thing into the DOM!
ReactDOM.render(<App />, document.getElementById('root'));
