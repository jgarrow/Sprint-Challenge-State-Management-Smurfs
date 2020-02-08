import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getSmurfs } from "../actions/smurfActions";

import Smurf from "./Smurf";

const CardsContainer = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 1rem auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const SmurfList = props => {
    const { getSmurfs } = props;

    useEffect(() => {
        getSmurfs();
    }, [getSmurfs]);

    return (
        <CardsContainer>
            {props.smurfs &&
                props.smurfs.map(smurf => (
                    <Smurf key={smurf.id} smurf={smurf} />
                ))}
        </CardsContainer>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
