import React from 'react';
import s from './ErrorButton.module.scss';

class ErrorButton extends React.Component {
    state = {
        hasError: false
    }

    makeRenderError = () => {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            this.foo.bar = 0;
        }

        return (
            <button className={s.ErrorBtn} onClick={this.makeRenderError}>Test Render Error Button</button>
        );
    }
}

export default ErrorButton;