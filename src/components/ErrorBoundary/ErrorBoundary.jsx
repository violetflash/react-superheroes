import React, { Component } from 'react';
import Error from "../Error";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    render() {
        return this.state.error ? <Error /> : this.props.children;
    }
}

export default ErrorBoundary;
