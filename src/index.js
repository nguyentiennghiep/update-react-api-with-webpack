import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './Reducers/index';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { ApolloClient, ApolloProvider } from 'react-apollo';
import AWSAppSyncClient from "aws-appsync";

import AppSync from './appsync';

const store = createStore(appReducer, applyMiddleware(thunk));
const client = new AWSAppSyncClient({
    url: AppSync.graphqlEndpoint,
    region: AppSync.region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: AppSync.apiKey,
    }
})

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <Rehydrated>
                <App />
            </Rehydrated>
        </ApolloProvider>
    </Provider>
    , document.getElementById('root'));