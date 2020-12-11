import React, {useState} from 'react'
import {connect} from 'react-redux';
import {postSmurfs} from '../actions/index.js' 

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: 0,
        height: ''
    })


    const submitHandler = (e) => {
        e.preventDefault()
        props.postSmurfs(smurf)
        document.getElementById('smurfform').reset()
      }

      const inputHandler = (e) =>{
        e.preventDefault()
        setSmurf({...smurf, [e.target.name]: e.target.value })
      }

        return(
            <div>
                <h3>Smurf Form</h3>
                <form onSubmit={submitHandler} id="smurfform">
                <input
      name="name"
      value={props.name}
      type="text"
      placeholder="Smurf Name"
      onChange={inputHandler} 
      />
      <input
      name="age"
      value={props.age}
      type="text"
      placeholder="Smurf Age"
      onChange={inputHandler}
      />
      <input
      name="height"
      value={props.height}
      type="text"
      placeholder="Smurf Height"
      onChange={inputHandler}
      />
      <button>Add Smurf!</button>  
                </form>
            </div>
        )

}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        errors: state.errors
    }
}
export default connect(mapStateToProps, {postSmurfs})(SmurfForm)

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.