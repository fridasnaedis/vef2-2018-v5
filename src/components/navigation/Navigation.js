import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Fetch from '../fetch'
import './Navigation.css';

export default class Navigation extends Component {

  render() {
    return (
      <Fetch 
        url='/' 
        render={({ data, loading, error, }) => {

          if (loading) {
            return (<div>Sæki gögn...</div>);
          }

          if (error) {
            return (<div> Villa við að sækja gögn </div>);
          }

          const { schools } = data;

          const navItems = schools.map((school) => {
            return ( 
              <li key={school.link}>
                <NavLink to={school.link}>
                  {school.name}
                </NavLink>
              </li>
              )
          });
          
          return (
            <nav className='navigation-bar'>
              <h1> Próftöflur </h1>
              <ul className='navigation-items'>
                {navItems}
              </ul>
            </nav>
          );
        }}
      />
    );
  }
}
