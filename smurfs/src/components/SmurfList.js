import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../actions/smurfActions";

const SmurfList = props => {
    const { getSmurfs } = props;

    useEffect(() => {
        getSmurfs();
    }, [getSmurfs]);

    return (
        <div>
            {props.smurfs &&
                props.smurfs.map(smurf => (
                    <div key={smurf.id}>
                        <h2>{smurf.name}</h2>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
