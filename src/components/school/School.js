import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Helmet from 'react-helmet';
import Fetch from '../fetch'
import Department from '../department'
import Footer from '../footer'
import './School.css';

export default class School extends Component {
  state = { selectedDepartment: null }

  handleClick = (i) => {
    const selectedDepartment = this.state.selectedDepartment !== i ? i : null;
    this.setState({ selectedDepartment });
  }

  render() {
    const { selectedDepartment } = this.state;

    return (
      <Fetch
        url={this.props.location.pathname}
        key={this.props.location.pathname}
        render={({ data, loading, error, }) => {

          if (loading) {
            return (<div>Sæki gögn...</div>);
          }

          if (error) {
            return (<div>Villa við að sækja gögn</div>);
          }

          if (data.error) {
            return <Redirect to="/error/404"/>
          }

          const { school } = data;
          
          const departments = school.departments.map((department, i) => {
            return <Department 
                    heading={department.heading} 
                    tests={department.tests} 
                    id={i} 
                    key={i}
                    onDepartmentSelect = {this.handleClick}
                    open={i === selectedDepartment}
                    />
          });

          return (
            <section>
              <Helmet title={`${school.heading} - Próftöflur`} />
              <div className='school'>
              <h2>{school.heading}</h2>
                <div className='departments'> {departments} </div>
              </div>
              <div className='footer'>
                <Footer />
              </div>
            </section>
          ); 
        }}
      />
    );
  }
}
