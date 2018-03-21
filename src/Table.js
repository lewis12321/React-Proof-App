/* eslint-disable */
import React from "react";
import axios from 'axios';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.updateTable()
  }

  updateTable(){
    axios.get('rest/data')
    .then((res) => {
      this.setState({data: res.data})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    const { data } = this.state;
    return (
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Email",
              accessor: "email"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
    );
  }
}

export default Table;
