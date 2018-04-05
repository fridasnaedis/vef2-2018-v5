import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Department.css';

export default class Exams extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    tests: PropTypes.arrayOf(PropTypes.shape({
      course: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      students: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })),
    id: PropTypes.number.isRequired,
    onDepartmentSelect: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  }

  render() {
    const { heading, tests, id, onDepartmentSelect, open } = this.props;
    
    const openIndicator = open ? '-' : '+';
    const departmentOpen = open ? 'open' : 'closed';
    const testItems = tests.map( (test, i) => {
      return (
      <tr className='course-info' key={i}>
        <td className='course-id'> {test.course} </td>
        <td className='course-name'> {test.name} </td>
        <td className='course-students'> {test.students} </td>
        <td className='course-date'> {test.date} </td>
      </tr>
      
      );
    });

    return (
      <section className={`dept department-${departmentOpen}`} onClick={()=> onDepartmentSelect(id)}>
        <div className='department-heading'> 
          <div className='open-indicator'>{openIndicator}</div> 
          <div>  {heading}  </div>
        </div>
        <table className='department-table'>
          <thead>
            <tr>
              <th className='course-id-heading'>Auðkenni</th>
              <th className='course-id-heading'>Námskeið</th>
              <th className='course-id-heading'>Fjöldi</th>
              <th className='course-id-heading'>Dagsetning</th>
            </tr>
          </thead>
          <tbody>
            {testItems}
          </tbody>
        </table>
      </section>
    );
  }
}
