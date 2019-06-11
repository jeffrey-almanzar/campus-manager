import React  from 'react';


class EditCampus extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name:"",
            location:"",
            imgUrl:"",
            description:""

        }
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value})
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

    render(){
        return(
            <div className="form-container">
                <h1 className="center-txt">Edit Campus</h1>
                
                <form>

                    <div className="input-container">
                        <div>
                            <label htmlFor="campus-name">Campus Name:</label>
                            <label htmlFor="campus-location">Campus Location:</label>
                            <label htmlFor="campus-img-url">Campus Image URL:</label>
                            <label htmlFor="campus-description">Campus Description:</label>
                        </div>

                        <div>
                             <input type="text" id="campus-name" onChange={this.onNameChange} value={this.state.name} placeholder="" />
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
                    <div>
                        <select>
                            <option>Student 1</option>
                            <option>Student 2</option>
                            <option>Student 3</option>
                        </select>
                    </div>
                    
                    <div>
                        <button>Add to Campus</button>
                    </div>
                   
                </div>

                <div>
                    <p className="center-txt">There are no students currently in this campus.</p>
                </div>
            </div>
        )
    }
}

export default EditCampus;