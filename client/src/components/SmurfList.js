import React, {useEffect} from 'react'
import SmurfCard from "./SmurfCard";
import { connect} from 'react-redux'
import {fetchSmurfs} from '../actions/index'


const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs()
        }, [])
    return (
        <div>
            <h2>SmurfList</h2>
            {props.smurfs.map(smurf => (
                <SmurfCard key={smurf.id} smurf={smurf}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state)  => {
    return {
      smurfs: state.smurfs,
      isLoading: state.isLoading,
      error: state.error
    }
  }
export default connect(
    mapStateToProps,
    {fetchSmurfs}
)(SmurfList)

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.