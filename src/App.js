import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            char_left: 140
        };
    }
    handleChange(e) {
        let input = e.target.value;
        this.setState({
            char_left: 140 - input.length
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.char_left}</h2>
                <textarea
                    onChange={this.handleChange.bind(this)}
                    row="20"
                    cols="30"
                />
            </div>
        );
    }
}

export default App;
