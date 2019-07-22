import React from 'react';
import Navigation from './Navigation';
import axios from 'axios';
import { Redirect} from "react-router-dom";
import Footer from './Footer';

class Add  extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            name:"",
            campus:"",
            gpa:"",
            url:"",
            location:"",
            description:"",
            img:"",
            redirect:false  
            
        }
    }

    submit = (event) =>{
        event.preventDefault();
       
        
        if(this.props.name.toUpperCase()==="STUDENT"){
            let info;

            try{
                
                info ={
                   
                    name: event.target[0].value,
                    campus: event.target[1].value,
                    gpa: event.target[2].value,
                    url: event.target[3].value
                }

                let validGpa = (Number(info.gpa) >0.0 && Number(info.gpa) < 4.0);

                if(info.name && validGpa && info.campus){
                    this.props.addOnCampus(info)
                    axios.post('https://desolate-hollows-41655.herokuapp.com/addStudent', info)
                      .then((response) => {
                        this.setState({redirect:true})
                        this.props.refreshStudents();
                       
                      })
                      .catch((error)=> {
                        alert("Error! Try again later")
                      });
                    
                   
                }else{
                    alert("Name and GPA must be provide!, try again.")
                }
                
               
            }catch(e){ // add student
                info ={
                    name: event.target[0].value,
                    campusName: event.target[1].value,
                    gpa: event.target[2].value,
                    url: event.target[3].value
                }

               let info2 ={
                    name: event.target[0].value,
                    campus: event.target[1].value,
                    gpa: event.target[2].value,
                    url: event.target[3].value
                }

                
                let validGpa = (Number(info.gpa) >0 && Number(info.gpa) < 4);

                if(info.name && validGpa && info.campusName){
                   
                    axios.post('https://desolate-hollows-41655.herokuapp.com/addStudent', info2)
                      .then( (response) => {
                
                        this.setState({redirect:true})
                        this.props.refreshStudents();
                       
                      })
                      .catch((error) =>{
                       alert("Error, Try again later")
                      });
                    this.setState({redirect:true})

                    setTimeout( ()=> this.props.add(info) , 1000);
                    
                    setTimeout(()=>{
                        axios.get('https://desolate-hollows-41655.herokuapp.com/campuses')
                        .then((response) => {
                        
                            this.props.refreshCampuses();
                            
                        })
                        .catch((error) => {
                            alert("Error, Try again later")
                        })
                },500)
                    
                    
                    
                }else{
                    alert("Name, campus, and GPA must be provide, try again.")
                }
              
            }
            
        }else{
            let info ={
                   
                campusName: event.target[0].value,
                location: event.target[1].value,
                description: event.target[2].value,
                img: event.target[3].value,
                campusStudents:[]
            }

            let info2 ={
                   
                campusname: event.target[0].value,
                location: event.target[1].value,
                description: event.target[2].value,
                img: event.target[3].value,
                
            }

            if(info.campusName){
                axios.post('https://desolate-hollows-41655.herokuapp.com/addCampus', info2)
                      .then( (response)=> {
                       
                      })
                      .catch( (error)=> {
                        alert("Error, Try again later")
                      });
                this.setState({redirect:true})
                
                setTimeout(()=>{
                    axios.get('https://desolate-hollows-41655.herokuapp.com/campuses')
                    .then((response) => {                 
                        this.props.refreshCampuses(); 
                    })
                    .catch((error) => {
                        alert("Error, Try again later")
                    })
                },1000)
                
            }else{
                alert("Name can not be empty, try again!")
            }
            
        }
        
        

    }

    nameChange = (e) =>{
        this.setState({name: e.target.value})
    }

    campusChange = (e) =>{
        this.setState({campus: e.target.value})
    }

    urlChange = (e) =>{
        this.setState({url: e.target.value})
    }

    gpaChange = (e) =>{
        this.setState({gpa: e.target.value})
    }

    locationChange = (e) =>{
        this.setState({location: e.target.value})
    }

    imgChange = (e) =>{
        this.setState({img: e.target.value})
    }

    descriptionChange = (e) =>{
        this.setState({description: e.target.value})
    }

    options = () =>{
        if(this.props.name.toUpperCase()==="STUDENT"){
            let defaultValue;
            try{
                defaultValue = this.props.info.location.state.campus
            }catch(e){
                defaultValue = this.state.campus
            }

            return(
                // ADDING A STUDENT
                <div>
                <div className="wrapper">
                <form onSubmit={this.submit} className="adding-from" >
                    <div className="adding-wrapper">
                        <h2 className="center-txt sub-heading" >Add Student</h2>
                        <p>{this.props.name} Name</p>
                        <input type="text" value={this.state.name} onChange={this.nameChange} />
                        <p><lable>Campus</lable></p>
                        <input type="text" value={defaultValue } onChange={this.campusChange}/>

                        <p><lable>GPA</lable></p>
                        <input type="text" value={this.state.gpa } onChange={this.gpaChange}/>

                       
                        <p><lable>Img url</lable></p>
                        <input type="text" value={this.state.url}  onChange={this.urlChange} />
                        

                        <div  className="center-txt bt-container">
                            <input className="add-btn btn" type ="submit" value={"Add " + this.props.name} /> 
                        </div>
                    </div>

                </form>
                   
                </div>
                  <Footer />
                </div>

            )
        }else{
            return (
                // ADDING A Campus
                <div>
                    <div className="wrapper">
                    <form onSubmit={this.submit}  className="adding-from">
                    <div className="adding-wrapper">
                        <h2 className="center-txt sub-heading">Add Campus</h2>
                        <p>{this.props.name} Name</p>
                        <input type="text" value={this.state.campus} onChange={this.campusChange} />

                        <p><lable>Location</lable></p>
                        <input type="text" value={this.state.location} onChange={this.locationChange}/>

                        <p><lable>Description</lable></p>
                    <textarea onChange={this.descriptionChange} value={this.state.description}  rows="6" cols="45" >                        
                        </textarea>

                        <p><lable>Img Url</lable></p>
                        <input type="text" value={this.state.img}  onChange={this.imgChange} />


                        <div  className="center-txt bt-container">
                            <input  className="add-btn btn" type ="submit" value={"Add " + this.props.name} /> 
                        </div>
                    </div>

                    </form>
                    
                    </div>
                    <Footer />
                </div>

            )
        }
    }

    render(){
        if (this.state.redirect) {
            if(this.props.name ==='Student'){
               
                return <Redirect to='/students'/>;
            }else{
                return <Redirect to='/campuses'/>;
            }
           
        } 

        return (
            
            <div>
                <Navigation />
                {this.options()}
            </div>
        )
    }
}

export default Add;