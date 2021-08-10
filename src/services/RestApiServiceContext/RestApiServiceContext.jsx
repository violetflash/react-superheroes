import React from 'react';

const {
    Provider: RestApiServiceProvider,
    Consumer: RestApiServiceConsumer
} = React.createContext();

export { RestApiServiceProvider, RestApiServiceConsumer };