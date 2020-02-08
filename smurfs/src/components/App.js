import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import styled from "styled-components";

import { smurfReducer as reducer } from "../reducers/smurfReducer";

import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";
import EditSmurfForm from "./EditSmurfForm";

const store = createStore(reducer, applyMiddleware(thunk));

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentWrapper = styled.div`
    width: 80%;
    max-width: 960px;
`;

const Title = styled.h1`
    text-align: center;
`;

function App() {
    return (
        <Provider store={store}>
            <AppContainer>
                <ContentWrapper>
                    <Title>Welcome to Smurfville!</Title>
                    <AddSmurfForm />
                    <EditSmurfForm />
                    <SmurfList />
                </ContentWrapper>
            </AppContainer>
        </Provider>
    );
}

export default App;
