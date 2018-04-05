import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Footer from '../footer'

export default class Home extends Component {

  render() {
    return (
      <section>
        <div className='error-main'>
          <Helmet title="Síða fannst ekki" />
          <p>Síða fannst ekki</p>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </section>
    );
  }
}
