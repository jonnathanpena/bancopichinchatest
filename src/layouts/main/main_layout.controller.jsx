import React, { Component } from 'react';
import PageHTML from './main_layout';

import { api_url } from '../../utils/constants';

import axios from 'axios';

class MainLayoutController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {},
      data: []
    };
    //this.getData = this.getData.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.getData();
  }

  getData = () => {
    setTimeout(() => {
      try {
        axios.get(api_url).then((value) => {
          this.setState({ data: value.data.results });
          this.setState({ header: value.data.info })
        }).catch(error => alert(error.message));
      } catch (error) {
        alert(error.message);
      }
    }, 500);
  }

  prev = (event) => {
    try {
      axios.get(this.state.header).then((value) => {
        this.setState({ data: value.data.results });
        this.setState({ header: value.data.info })
      }).catch(error => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }

  next = (evtn) => {

  }

  render() {
    return (
      <PageHTML
        result={ this.state.data }
        next={this.prev}
        prev={this.next}
      />
    );
  }
}

export default MainLayoutController;