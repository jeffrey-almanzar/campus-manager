import React from 'react';

class EditStudent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name:"",
            gpa:"",
            url:""
        }
    }

    submit = (event) =>{
        event.preventDefault();
        let name = event.target[0];
        let gpa= event.target[1];
        
        console.log(name)

        if(!name.value){
            //name.style.borderColor="red";
            name.style.borderColor ="red";
            
        }

        if(!(gpa.value> 0.0 && gpa.value <= 4.0)){
            gpa.style.borderColor ="red";
            
        }

        name.addEventListener('focus', ()=>{
            console.log(name.style.borderColor)
            name.style.border ="none";
        })

        gpa.addEventListener('focus', ()=>{
            gpa.style.border ="none";
        })


        
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

    render(){
        return (
            <form onSubmit={this.submit}>
                <p><label htmlFor="name">Student Name</label></p>
                <input id="name" type="text" value={this.state.name} onChange={this.onChangeName} />

                <p><label htmlFor="gpa">GPA</label></p>
                <input type="text" id="gpa" value={this.state.gpa} onChange={this.onChangeGpa} />

                <p><label htmlFor="url">Student URL</label></p>
                <input type="text" id="url" value={this.state.url} onChange={this.onChangeUrl} />

                <div>
                    <p>*Student name can not be blank</p>
                    <p>*GPA must be a number between 0.0 and 4.0</p>
                </div>

                <input value="Save Changes" type="submit" />


            </form>
        )
    }
}

export default EditStudent;