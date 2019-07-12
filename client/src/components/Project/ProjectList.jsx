import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border: 1px solid #78797F;
    width: 300px;

    h2 {
        margin: 3px;
    }
    button {
        width: 100px;
        margin: 3px;
        background-color: rgba(0.6, 0.9, 0.9, .9);
        outline: none;
        color: white;
        cursor: pointer;
        &:hover{
            transition: all 5 ease-in-out;
            background-color: rgba(0.9, 0.9, 0.9, 1);
        }
    }
`;
const ProjectList = (props)=>{
    console.log(props)
    const {project} = props;
    // const {deleteUser} = props
    return (
        <Div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <button>Update</button>
            <button>Delete</button>
        </Div>
    )
};


export default ProjectList;