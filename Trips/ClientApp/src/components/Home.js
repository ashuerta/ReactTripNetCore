import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to trips manager</h1>
        <p>Use this manager to your trips, by:</p>
        <ul>
          <li>Add a new Trip</li>
          <li>Update a Trip</li>
          <li>Delete a Trip</li>
          <li>Show all Trips</li>
        </ul>
      </div>
    );
  }
}
