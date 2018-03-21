/* eslint-disable */
import React from 'react';
import './BasicForm.css';
import axios from 'axios';
import * as EmailValidator from 'email-validator';

  class BasicForm extends React.Component {

    constructor( props ) {
      super( props );
      this.state = {
        name: "",
        email: "",
        confirmEmail: "",
        showModal: false,
        color: "red",
      };
    }

    postError(){
      axios.post('rest/data', {
        name: this.state.name,
        email: this.state.email
      }, {
  		headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
  	})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    checkValid(){
      if (EmailValidator.validate(this.state.email)) {
        this.postError();
      } else {
        this.setState({
          name: "",
          email: "",
        });
        alert("You must enter a valid email!");
      }
    }

    updateName(evt){
      this.setState({
        name: evt.target.value
      });
    }

    updateEmail(evt){
      this.setState({
        email: evt.target.value
      });
    }

    changeColor(email, toBeCheckedEmail){
      if(email === "" || toBeCheckedEmail ===""){
        return "red";
      }

      if(email === toBeCheckedEmail){
        return "green";
      }else{
        return "red";
      }
    }

    render() {

      let textColor = this.changeColor(this.state.email, this.state.confirmEmail);

      return (
        <div className="form">
          <form>
            <p>
              <label className="error-form-row">Name:</label>
              <input placeholder="Enter name" value={this.state.name} onChange={evt => this.updateName(evt)}/>
            </p>
            <p>
              <label style={{color: textColor}} className="error-form-row">Email:</label>
              <input placeholder="Enter email" value={this.state.email} onChange={evt => this.updateEmail(evt)}/>
            </p>
            <p>
              <label style={{color: textColor}} className="error-form-row">Confirm Email:</label>
              <input placeholder="Enter email" value={this.state.confirmEmail} onChange={evt => this.setState({confirmEmail: evt.target.value})}/>
            </p>
            <button id="submit-button" className="buttons flatbutt concrete" type="button" onClick={() => {this.checkValid()}}>Submit</button>
          </form>
        </div>
      );
    }
  }

export default BasicForm;
