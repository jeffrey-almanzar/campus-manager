import React from 'react';
import {Link} from 'react-router-dom';
import "../App.css";
import menu from '../img/menu.png';

class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.menu = React.createRef();
        this.state={
            showMenu:false
        }
    }

    componentDidMount(){
        this.menu.current.style.display ="none";
        window.addEventListener('resize', ()=>{
            if(window.innerWidth > 800){
                document.getElementById("dropDownLinks").style.display = "none";
                this.setState({showMenu:false})
            }
           
        })
    }

    onClick = ()=>{
        if(this.state.showMenu){
            this.menu.current.style.display ="none";
            this.setState({showMenu:false})
        }else{
            this.menu.current.style.display ="block";
            this.setState({showMenu:true})
        }
       
        
    }

    render(){
        return(

            <header>
                <nav className="navigation-bar">
                    <div>
                        <a href="/">
                            <img className="logo" src="https://image.freepik.com/free-vector/university-campus-logo_1447-1791.jpg"
                                alt="Main logo"/>
                        </a>
                        <li><Link to="/">Campus Manager</Link></li>
                    </div>
                    <ul className="links">
                        <li><Link to="/">Home </Link></li>
                        <li><Link to="/campuses">Campuses</Link></li>
                        <li><Link to="/students">Students</Link></li>
                    </ul>
                    <div className="menu-container" onClick={this.onClick}>
                        <img src={menu} alt="menu" />
                    </div>
                    
                </nav>
                <div  ref={this.menu} id="dropDownLinks" className="dropDownLinks">
                        <p><Link to="/">Home </Link></p>
                        <p><Link to="/campuses">Campuses</Link></p>
                        <p><Link to="/students">Students</Link></p>
                    </div>
            </header>
        )
    }
}

export default Navigation;