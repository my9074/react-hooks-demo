import React, { Fragment } from 'react';

export default class GreetingClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '小桌子',
      age: 25,
    };
    this.onHandleNameChange = this.onHandleNameChange.bind(this);
    this.onHandleAgeChange = this.onHandleAgeChange.bind(this);
  }

  onHandleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onHandleAgeChange(e) {
    this.setState({
      age: e.target.value,
    });
  }

  render() {
    const { name, age } = this.state;
    return (
      <Fragment>
        <section className="row">
          <span>Name</span>
          <input type="text" value={name} onChange={this.onHandleNameChange} />
        </section>
        <section className="row">
          <span>Age</span>
          <input type="text" value={age} onChange={this.onHandleAgeChange} />
        </section>
      </Fragment>
    );
  }
}
