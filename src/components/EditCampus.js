import React  from 'react';
import Navigation from './Navigation';
import StudentRow from './StudentRow';
import {Link} from 'react-router-dom';

class EditCampus extends React.Component{

    constructor(props){
        super(props);

        let campusStudents =[];
        for(let i=0; i< this.props.allCampuses.length; i++){
            if(this.props.info.location.state.campusName === this.props.allCampuses[i].campusName){
                campusStudents = this.props.allCampuses[i].campusStudents;
                break;
            }
        }

        this.state = {
            campusName: this.props.info.location.state.campusName,
            location:this.props.info.location.state.location,
            img:this.props.info.location.state.img,
            campusStudents,
            description:this.props.info.location.state.description,

        }
        // this.props.info.location.state.campusStudents,
    }

    deleteStudent = () =>{
        
    } 

    componentDidMount(){
        console.log(this.props);
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
        this.edit(initialState, currentState);
    }

    edit = (prevState, currentState) =>{
        this.props.edit({prevState, currentState});
    }

    displayStudents = () =>{
        let container = [];
        for(let i=0; i< this.state.campusStudents.length; i++){
            container.push(<StudentRow reRenderEditCampus={this.reRender} campusStudents={this.state.campusStudents} campusName={this.props.info.location.state.campusName} name={this.state.campusStudents[i].name} deleteStudent = {this.props.deleteStudent} />)
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
        return(
            <div>
                <Navigation />
                <div className="form-container">
                    <h1 className="center-txt">Edit Campus</h1>
                    
                    <form onSubmit={this.submit}>

                        <div className="input-container">
                            <div>
                                <label htmlFor="campus-name">Campus Name:</label>
                                <label htmlFor="campus-location">Campus Location:</label>
                                <label htmlFor="campus-img-url">Campus Image URL:</label>
                                <label htmlFor="campus-description">Campus Description:</label>
                            </div>

                            <div>
                                <input type="text" id="campus-name" onChange={this.onNameChange} value={this.state.campusName} placeholder="" />
                                <input type="text" id="campus-location" onChange={this.onLocationChange} value={this.state.location} placeholder="" />                           
                                <input type="text" id="campus-img-url" onChange={this.onImgChange} value={this.state.imgUrl} placeholder="" />           
                                <textarea id="campus-description" onChange={this.onDescriptionChange} value={this.state.description}  rows="6" cols="50" >                        
                                </textarea>
                                <input type="submit" value="Save Changes" /> 
                            </div>
                            
                        </div>

                    
                        
                    </form>

                    <h2 className="center-txt">Students On Campus</h2>
                    <div className="edit-camp-options">
                        {/* <div>
                            <select>
                                <option >Select a student</option>
                                {this.getOptions()}
                            </select>
                        </div>
                         */}
                        <div>
                        <Link to={{pathname:"/addStudent", state:{campus:this.props.info.location.state.campusName}}}><button>Add Student</button></Link>
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