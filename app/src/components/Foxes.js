import React from 'react';
import { connect } from 'react-redux';
import { getPic} from '../actions/actions';


const Foxes = (props) => {

    
    if (props.isFetching) {
        return <h2>Fetching Beautiful Foxes for you...</h2>
    }

    return (
        <>
        <div className="Fox-div">
            <img src={props.picture}/>
            <button onClick = {() => props.getPic()}>Click for more Foxes</button>
        </div>
        </>
    )
};

const mapToStateProps = state => {
    return {
        picture: state.picture,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapToStateProps, {getPic}) (Foxes);