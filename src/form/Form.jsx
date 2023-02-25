import React, { Component } from 'react';
import "./Form.css";
import {FiSend} from "react-icons/fi";
import { frameworks ,learningTypes,levels} from '../util/data';
//import {frameworks} from "../util/data.js"; 


export class Form extends Component {
    constructor(props){
        super(props)

        this.state={
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            framework:"React",
            level:"Basic",
            learningType:["Fundamentals"],
            feedBack:"",
        };
    };
    
    handleChange=(e)=>{
       // console.log(e);
        const {name,value}=e.target;
        return this.setState({
            [name]:value
        });
    }

    handleCheckbox = (e) => {
        const{value,checked} = e.target;
        const {learningType} = this.state;
    
        if(checked){
          this.setState({
            learningType:[...learningType,value]
          })
        }else{
          this.setState({
            learningType:learningType.filter(el => el != value)
          });
        }
      }
    
      formSubmit = (e) => {
        e.preventDefault()
        alert("Submitted!");
        console.log("checkout this state",this.state);
      };

  render() {
    //console.log(this.state);
    const {
        firstName,
        lastName,
        email,
        phone,
        level,
        framework,
        learningType,
        feedBack
      } = this.state;

    return (
        <>
      <div className="bgStyle"> 
        <form onSubmit={this.formSubmit}>
            <div className="formStyle">
                <div className="sendCircle">
                    <FiSend className="sendIcon" /> 
                </div>
                <p className="head"> Hello !!</p>

                <div className="fullName">
                    <div> 
                        <label className="label">First Name</label>
                        <br/>
                        <input type="text" value={firstName} name="firstName" onChange={this.handleChange} placeholder="First Name" />
                    </div>
                    <div> 
                        <label className="label">Last Name</label> <br />
                        <input type="text" value={lastName} name="lastName" onChange={this.handleChange} placeholder="Last Name"/>
                    </div>
                </div>
                <div>
                    <label className="label">Email</label><br/>
                     <input type="email" value={email} onChange={this.handleChange} name="email" placeholder='Email'/>
                </div>
                <div> 
                    <label className="label"> Mobile Number</label>
                    <br/>
                    <input type="number" value={phone} onChange={this.handleChange} name="phone"/>
                </div>
                <div>
                    <label className="label"> Which framework is that you learn?</label>
                    <br/>
                    <select value={framework} onChange={this.handleChange} name="framework">
                        {frameworks.map((e)=> (
                            <option key={e.id}>{e.value}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="label">Level</label>
                    <div className='wrapper'>
                        { levels.map((e)=> (
                                <div key={e.id} className="wrapperInner">
                                    <input type="radio" defaultChecked={e.name === level} value={e.name} name="level" onChange={this.handleChange} />
                                <label className="label">{e.name}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="label">
                <label>Which learning is that?</label><br/>
                <div className="wrapper">
                  {learningTypes.map((e) => (
                    <div key={e.id} className="wrapperInner">
                      <input type="checkbox" name={e.name} value={e.name} defaultChecked={learningType &&learningType.includes(e.name)}  onChange={this.handleCheckbox}/>
                      <label className="label">{e.name}</label>
                    </div>
                  ))}
                    </div>
                </div>
                <div>
                    <label className="label"> Why like this?</label><br/>
                    <textarea row="50" value={feedBack} name="feedBack" onChange={this.handleChange}placeholder="Text here..."></textarea>
                </div>
                <div>
                    <button className='button' type="submit">Submit</button>
                </div>
            </div>
        </form>
       </div>
    </>
    );
  }
}

export default Form;