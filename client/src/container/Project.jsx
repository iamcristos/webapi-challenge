import React, {Component} from 'react';

class Project extends Component {
    state = {
        projects: [],
        loading: false,
    }

    render() {
        return (
            <div>
                <h1> PROJECTS </h1>
            </div>
        )
    }
}

export default Project;