import React from 'react';

class Add  extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            value:""
        }
    }

    submit = (event) =>{

    }

    valueChange = (e) =>{
        this.setState({value: e.target.value})
    }

    render(){ 
        return (
            <form onSubmit={this.submit} className="center-txt">

                <h2>{this.props.name.toUpperCase()} NAME</h2>
                <input type="text" value={this.state.value} onChange={this.valueChange} />
                <div>
                    <input type ="submit" value={"Add " + this.props.name} /> 
                </div>

            </form>
        )
    }
}

export default Add;