import React from 'react';
import {toast} from 'react-toastify';
import axois from '../../axois';
import styled from 'styled-components';
import Svg from '../../assests/project.svg';


const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 3px 10px;
    width: 98%;
    height: 100vh;
    border: 1px solid green;
    -webkit-box-shadow: -8px -5px 0px -5px rgba(0,0,0,0.73);
-moz-box-shadow: -8px -5px 0px -5px rgba(0,0,0,0.73);
box-shadow: -8px -5px 0px -5px rgba(0,0,0,0.73);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 30px;
    div{
        img {
            border: 1px solid red;
            width: 40px;
        }
    }
    label {
        width: 300px;
        input, textarea {
            width: 300px;
            padding: 10px;
            margin: 10px;
            border: 1px solid black;
            outline: none;
        }
    };
    button {
        width: 300px;
        height: 30px;
        border-radius: 10px;
        margin: 10px;
        cursor: pointer;
        background-color: rgba(0.6, 0.9, 0.9, .9);
        color: white;
        outline: none;
        &:hover {
            transition: all 5 ease-in-out;
            background-color: rgba(0.9, 0.9, 0.9, 1);
        }
    }
`;
export default function PostForm() {
    const projectName = React.createRef();
    const projectDescription = React.createRef();
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const project = {
            name: projectName.current.value,
            description: projectDescription.current.value
        }
        axois.post('/project',project )
            .then(res=>toast.success('project added sucessfully'))
            .catch(err=>toast.error(err.response.data.message))
    }
    return (
        <Div>
            <div>
                <img src={Svg} alt="svg" style={{width: '700px', height: "400px", marginRight: "20px"}}/>
            </div>
            <Form onSubmit={(e)=>onSubmitHandler(e)}>
                <h3>Fill out the form</h3>
                <label>
                    Name:
                    <input type="text" ref={projectName}/>
                </label>
                <label>
                    Description:
                    <textarea ref={projectDescription}> Enter your description here... </textarea>
                </label>
                <button>Add</button>
            </Form>
        </Div>
    )
}