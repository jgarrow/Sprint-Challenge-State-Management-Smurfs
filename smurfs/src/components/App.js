import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { smurfReducer as reducer } from "../reducers/smurfReducer";

import SmurfList from "./SmurfList";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <div>Hello World</div>
            <SmurfList />
        </Provider>
    );
}

export default App;
