import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Fetch from '../fetch'
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <Fetch 
        url='/stats'
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

          const { stats } = data;

            return (
              <div className='home'>
                <h2> Tölfræði </h2>
                <ul>
                  <li className='list-item'> 
                    <div className='list-item-description'> Fjöldi prófa </div> 
                    <div className='list-item-data'> {stats.numTests} </div> 
                  </li>
                  <li className='list-item'> 
                    <div className='list-item-description'> Fjöldi nemenda í öllum prófum </div> 
                    <div className='list-item-data'> {stats.numStudents} </div> 
                  </li>
                  <li className='list-item'> 
                    <div className='list-item-description'> Meðalfjöldi nemenda í prófi </div> 
                    <div className='list-item-data'> {stats.averageStudents} </div> 
                    </li>
                  <li className='list-item'> 
                    <div className='list-item-description'> Minnsti fjöldi nemenda í prófi </div> 
                    <div className='list-item-data'> {stats.min} </div> 
                  </li>
                  <li className='list-item'> 
                    <div className='list-item-description'> Mesti fjöldi nemenda í prófi </div> 
                    <div className='list-item-data'> {stats.max} </div> 
                  </li>
                </ul>
              </div>
            );
        }}
      />
    );
  }
}
