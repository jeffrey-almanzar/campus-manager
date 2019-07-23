import React  from 'react';
import Navigation from './Navigation';
import StudentRow from './StudentRow';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class EditCampus extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            campusName: this.props.info.location.state.campusName,
            location:this.props.info.location.state.location,
            img:this.props.info.location.state.img,
            campusStudents:"",
            description:this.props.info.location.state.description,
            redirect:false

        }
        
    }

    deleteStudent = () =>{
        
    }
    
    refresh = () =>{
        axios.get('https://desolate-hollows-41655.herokuapp.com/students')
            .then( (response) => {
                let studentsRegistered = [];
    
                for(let i=0; i <response.data.students.length; i++){
                    if(response.data.students[i].campusName === this.props.info.location.state.campusName ){
                        studentsRegistered.push(response.data.students[i]);
                    }
                }
               

                this.setState({campusStudents:studentsRegistered})  
                
            })

    }

    componentDidMount(){
        
        this.refresh()
    }

    onNameChange = (e) => {
        this.setState({campusName: e.target.value})
    }

    getInitialState = () =>{
        return ({
            campusName: this.props.info.location.state.campusName,
            location:this.props.info.location.state.location,
            img:this.props.info.location.state.img,
            campusStudents: this.props.info.location.state.students,
            description:this.props.info.location.state.description,
        })
    }

    reRender = (campusStudents) =>{
        this.setState({campusStudents})
    }

    onLocationChange = (e) =>{
        this.setState({location: e.target.value})
    }

    onImgChange= (e) =>{
        this.setState({imgUrl: e.target.value})
    }

    onDescriptionChange= (e) =>{
        this.setState({description: e.target.value})
    }

    submit = (e) =>{
        e.preventDefault();

        let initialState = this.getInitialState();
        let currentState ={
            campusName: e.target[0].value ,
            location: e.target[1].value,
            img: e.target[2].value,
            campusStudents:  this.state.campusStudents,
            description: e.target[3].value,
        }
        //adding a new cmpus info
        let info2 ={
                   
            campusname:  e.target[0].value,
            location: e.target[1].value,
            description: e.target[3].value,
            img: e.target[2].value,
            
        }

        if( e.target[0].value != initialState.campusName){// if you edit campus name, create a new campus with that info
            axios.post('https://desolate-hollows-41655.herokuapp.com/addCampus', info2)
                .then( (response)=> {
                    this.setState({redirect:true})
                    this.props.refreshCampuses();
                    this.props.refreshStudents();
                })
        }else{

            axios.put('https://desolate-hollows-41655.herokuapp.com/editCampus/1', {
                campusName: e.target[0].value ,
                location: e.target[1].value,
                img: e.target[2].value,
                description: e.target[3].value,
                preVname: initialState.campusName
            })
            .then( (response) => {
                alert("Campus edited");
                this.setState({redirect:true})
                this.props.refreshCampuses();
                this.props.refreshStudents();
            
            
            })
            .catch((error)=> {
                alert('Error! try again')
            });

            this.edit(initialState, currentState);
        }
    }

    edit = (prevState, currentState) =>{
        this.props.edit({prevState, currentState});
    }

    displayStudents = () =>{
        let container = [];
        for(let i=0; i< this.state.campusStudents.length; i++){
            container.push(<StudentRow refresh={this.refresh} url ={this.state.campusStudents[i].url} onLoadStudents={this.props.onLoadStudents} reRenderEditCampus={this.reRender} campusStudents={this.state.campusStudents} campusName={this.props.info.location.state.campusName} name={this.state.campusStudents[i].name} deleteStudent = {this.props.deleteStudent} />)
        }
        return container;
    }

    getOptions = () =>{
        let container =[];
        for(let i=0; i< this.state.campusStudents.length; i++){
            let student =this.state.campusStudents[i];
            container.push(<option value={student.name} >{student.name}</option>)

        }
        return container;

    }

    render(){
        if(this.state.redirect){
            return <Redirect to="/campuses" />
        }
        return(
            <div>
                <Navigation />
                <div className="form-container">
                   
                    
                    <form onSubmit={this.submit}>
                    <h1 className="center-txt sub-heading">Edit Campus</h1>
                        <div className="input-container">
                            <div>
                                <label className="bold" htmlFor="campus-name">Campus Name:</label>
                                <label className="bold" htmlFor="campus-location">Campus Location:</label>
                                <label className="bold" htmlFor="campus-img-url">Campus Image URL:</label>
                                <label className="bold" htmlFor="campus-description">Campus Description:</label>
                            </div>

                            <div>
                                <input type="text" id="campus-name" onChange={this.onNameChange} value={this.state.campusName} placeholder="" />
                                <input type="text" id="campus-location" onChange={this.onLocationChange} value={this.state.location} placeholder="" />                           
                                <input type="text" id="campus-img-url" onChange={this.onImgChange} value={this.state.img} placeholder="" />           
                                <textarea id="campus-description" onChange={this.onDescriptionChange} value={this.state.description}  rows="6" cols="50" >                        
                                </textarea>
                                <input className="add-btn" type="submit" value="Save Changes" /> 
                            </div>
                            
                        </div>

                    
                        
                    </form>

                    <h2 className="center-txt sub-heading">Students On Campus</h2>
                    <div className="edit-camp-options">
                        
                        <div className="edit-campus-btn-container">
                        <Link to={{pathname:"/addStudent", state:{campus:this.props.info.location.state.campusName}}}><button className="add-btn">Add Student</button></Link>
                        </div>
                    
                    </div>

                    <div>
                        { this.state.campusStudents.length ? this.displayStudents() : <p className="center-txt">There are no students currently in this campus.</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default EditCampus;