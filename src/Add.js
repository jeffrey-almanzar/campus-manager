import React from 'react';
import Navigation from './Navigation';

class Add  extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            name:"",
            campus:"",
            gpa:"",
            url:""
        }
    }

    submit = (event) =>{
        event.preventDefault();
       
        
        if(this.props.name.toUpperCase()==="STUDENT"){
            let info;
           

            try{
                let campusName = this.props.info.location.state.campus;
                info ={
                   
                    name: event.target[0].value,
                    campus: event.target[1].value,
                    gpa: event.target[2].value,
                    url: event.target[3].value
                }
                this.props.addOnCampus(info)
                alert("Student Added")
            }catch(e){
                info ={
                    name: event.target[0].value,
                    campus: event.target[1].value,
                    gpa: event.target[2].value,
                    url: event.target[3].value
                }
                this.props.add(info);
                alert("Student Added")
            }
            
        }else{
            this.props.add(event.target[0]);
            alert("Student Added")
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

    options = () =>{
        if(this.props.name.toUpperCase()=="STUDENT"){
            let defaultValue;
            try{
                defaultValue = this.props.info.location.state.campus
            }catch(e){
                defaultValue = this.state.campus
            }

            return(
                <form onSubmit={this.submit} className="center-txt">

                    <h2>{this.props.name.toUpperCase()} NAME</h2>
                    <input type="text" value={this.state.name} onChange={this.nameChange} />
                    <p><lable>Campus</lable></p>
                    <input type="text" value={defaultValue } onChange={this.campusChange}/>

                    <p><lable>GPA</lable></p>
                    <input type="text" value={this.state.gpa } onChange={this.gpaChange}/>

                    <p><lable>Img url</lable></p>
                    <input type="text" value={this.state.url}  onChange={this.urlChange} />

                    <div>
                        <input type ="submit" value={"Add " + this.props.name} /> 
                    </div>

                </form>

            )
        }else{
            return (
                <form onSubmit={this.submit} className="center-txt">

                    <h2>{this.props.name.toUpperCase()} NAME</h2>
                    <input type="text" value={this.state.name} onChange={this.nameChange} />
                    <div>
                        <input type ="submit" value={"Add " + this.props.name} /> 
                    </div>

                </form>

            )
        }
    }

    render(){ 
        return (
            <div>
                <Navigation />
                {this.options()}
            </div>
        )
    }
}

export default Add;