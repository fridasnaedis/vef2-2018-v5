import { Component } from 'react';
import PropTypes from 'prop-types';
require('dotenv').config();

const { REACT_APP_SERVICE_URL } = process.env;

export default class Fetch extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
  }
  state = { data: null, loading: true, error: false }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching data', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData() {
    const { url } = this.props;
    const response = await fetch(`${REACT_APP_SERVICE_URL}${url}`);
    const data = await response.json();
    return data;
  }

  render() {
    return this.props.render(this.state);

  }
}