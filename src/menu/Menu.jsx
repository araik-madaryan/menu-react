import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    
    handleOpen = () => {
        const isOpen = this.state.isOpen
        this.setState({ isOpen: !isOpen })
    }

    selectSearch = () => {
		document.getElementById("search").select()
	}
    
    render() {
        let menu = "menu"
        if (this.state.isOpen) {
            menu += " Open"
        }
        return (
            <div className="Menu">
                <button className={"button-" + menu} onClick={this.handleOpen}><i className="fas fa-plus"></i></button>
                <div className={menu}>
                    <div id="firstElement" className="element">
                        <p>First element</p>
                    </div>
                    <div className="element">
                        <p>Second element</p>
                    </div>
                    <div className="element">
                        <p>Third element</p>
                    </div>
                </div>
                <ul>
                    <div className="left-division">
                        <li><button><i className="fas fa-briefcase"></i></button></li>
                        <li><button><i className="fas fa-user-plus"></i></button></li>
                    </div>
                    <div className="right-division">
                        <li><button><i className="fas fa-bell"></i></button></li>
                        <li><button onClick={this.selectSearch}><i className="fas fa-search"></i></button></li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default Menu;
