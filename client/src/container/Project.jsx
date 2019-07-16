import React, {Component} from 'react';
import axois from '../axois';
import ProjectList from '../components/Project/ProjectList';
class Project extends Component {
    state = {
        projects: [],
        loading: false,
    }

    componentDidMount() {
        this.setState({loading: true})
        axois.get('/project')
            .then(res=> this.setState({projects:res.data.data}))
            .catch(err => console.log(err))
            .finally(()=> this.setState({loading:false}))
    }
    render() {
        return (
            <div>
                {this.state.loading ? <span>Loading......</span> :
                <div>
                    <h1> PROJECTS </h1>
                    <div style={{display: 'flex'}}>
                        {this.state.projects.map(project=>(
                            <ProjectList key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            }    
            </div>
        )
    }
}

export default Project;