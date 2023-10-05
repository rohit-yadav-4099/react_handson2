

import { Component } from "react";

class Form extends Component{
    constructor(){
        super();
        this.state = {
            name : "",
            department : "",
            rating : "",
            dataStore : []
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const dataobj = {
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        if(dataobj.name.length>0 && dataobj.department.length>0 && dataobj.rating.length>0){
            this.state.dataStore.push(dataobj)
            this.setState({
                dataStore: this.state.dataStore,
                name: "",
                department: "",
                rating: "",
                toggle : false
            })
    
            alert("submitted")
        }

        else{
            alert("Blank Form not accepted")
        }
    }
    render(){
        return(
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form>
            <label htmlFor="name" className="head">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange}></input><br></br>
            <label htmlFor="dept" className="head">Department:</label>
            <input type="text" id="dept" name="department" placeholder="Enter Dept." value={this.state. department} onChange={this.handleChange}></input><br></br>
            <label htmlFor="rate" className="head">Rating:</label>
            <input type="number" id="rate" name="rating" placeholder="Enter Rate" value={this.state.rating} onChange={this.handleChange}></input><br></br><br></br>
            <button className="btn" onClick={this.handleSubmit}>Submit</button>
            </form>

            <div className="parentdiv">
            {this.state.dataStore.map((Element,index) =>{
                return(
                    <div key={index} className="data">
                   <h3>Name:{Element.name} || Dept:{Element.department} || Rating:{Element.rating}</h3>
                </div>
                )
            })}
          

           </div>

            </>
        )
    }
}

export default Form;
