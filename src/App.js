/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';
import BasicForm from './BasicForm.js';
import ReactModal from 'react-modal';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       showModal: false
     };

  this.handleOpenModal = this.handleOpenModal.bind(this);
  this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="content">

      <div>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Modal"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >
          <BasicForm />
        </ReactModal>
      </div>
        <Table />
        <div id="button">
          <button className="button" onClick={() => this.handleOpenModal()}>Add To Form</button>
          </div>
      </div>
    );
  }
}

export default App;
