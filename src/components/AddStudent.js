import React from 'react';
import Navigation from './Navigation';

class Add  extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            name:"",
            campus:"",
            url:""
        }
    }

    submit = (event) =>{
        event.preventDefault();
        this.props.add(event.target[0])

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

    render(){ 
        return (
            <div>
                <Navigation />
                <form onSubmit={this.submit} >

                    <p><label htmlFor="name">Name</label></p>
                    <input id="name" type="text" value={this.state.name} onChange={this.nameChange} />

                    <p><lable htmlFor="campus">Campus</lable></p>
                    <input id="campus" type="text" value={this.state.campus} onChange={this.campusChange} />

                    <p><lable htmlFor="url">Img url</lable></p>
                    <input id="url" type="text" value={this.state.url} onChange={this.urlChange} />

                    <div>
                        <input type ="submit" value="Add Student" /> 
                    </div>

                </form>
            </div>
        )
    }
}

export default Add;