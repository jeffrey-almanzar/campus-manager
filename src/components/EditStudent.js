import React from 'react';
import Navigation from './Navigation';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class EditStudent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: this.props.info.location.state.name,
            gpa:this.props.info.location.state.gpa,
            campus: this.props.info.location.state.campusName,
            url:this.props.info.location.state.url,
           redirect:false
        }

    }

    getIntialState = () => {
        return {
            name: this.props.info.location.state.name,
            gpa:this.props.info.location.state.gpa,
            campus: this.props.info.location.state.campusName,
            url:this.props.info.location.state.url
        }
    }

    edit =(prevState, currentState)=>{
        this.props.edit({prevState: prevState, currentState: currentState})
    }

    submit = (event) =>{
        event.preventDefault();
        let name = event.target[0];
        let campus = event.target[1]
        let gpa= event.target[2];
        let url = event.target[3];
        
        console.log(name)

        if(!name.value){
            name.style.borderColor ="red";
            
        }

        if(!(gpa.value> 0.0 && gpa.value <= 4)){
            gpa.style.borderColor ="red";
            
        }

        name.addEventListener('focus', ()=>{
            console.log(name.style.borderColor)
            name.style.border ="none";
        })

        gpa.addEventListener('focus', ()=>{
            gpa.style.border ="none";
        })

        let initState = this.getIntialState();
        let currState = {
            name: name.value,
            gpa:gpa.value,
            campus: campus.value,
            url: url.value
        }

        axios.put('https://desolate-hollows-41655.herokuapp.com/editStudent/1', {
            name: name.value,
            gpa:gpa.value,
            campus: campus.value,
            url: url.value,
            preVname: initState.name
        })
            .then((response)=> {
                alert("Student edited")
                this.props.refreshStudents();
                this.setState({redirect:true});
        
            })
            .catch(function (error) {
            console.log("Not worked");
            });

        this.edit(initState, currState);

        
    }

    onChangeName = (e) =>{
        this.setState({name: e.target.value})
    }

    onChangeGpa= (e) =>{
        this.setState({gpa: e.target.value})
    }

    onChangeUrl= (e) =>{
        this.setState({url: e.target.value})
    }

    onCampusChange = (e) =>{
        this.setState({campus: e.target.value})
    }

    

    

    render(){
        if(this.state.redirect){
            return <Redirect to="/students" />
        }
        return (
            <div>
                <Navigation />
                <div className="wrapper">
                <div className="edit-wrapper">
                    <form onSubmit={this.submit} className="edit-form">
                        <h2 className="center-txt sub-heading">Edit Student</h2>
                        <p><label className="bold" htmlFor="name">Student Name</label></p>
                        <input id="name" type="text" value={this.state.name} onChange={this.onChangeName} />

                        <p><label className="bold" htmlFor="campus">Campus</label></p>
                        <input type="text" id="campus" value={this.state.campus} onChange={this.onCampusChange} />

                        <p><label className="bold" htmlFor="gpa">GPA</label></p>
                        <input type="text" id="gpa" value={this.state.gpa} onChange={this.onChangeGpa} />

                        <p><label className="bold" htmlFor="url">Student URL</label></p>
                        <input type="text" id="url" value={this.state.url} onChange={this.onChangeUrl} />

                        <div>
                            <p className="warning">*Student name can not be blank</p>
                            <p className="warning">*GPA must be a number between 0.0 and 4.0</p>
                        </div>

                        <div className="edit-campus-btn-container">
                            <input className="add-btn btn" value="Save Changes" type="submit" />
                        </div>
                        

                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default EditStudent;