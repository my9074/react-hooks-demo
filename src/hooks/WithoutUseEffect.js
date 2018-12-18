import React, { Fragment } from 'react';

export default class TitleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '小李子',
      age: 25,
      width: window.innerWidth,
    };
    this.onHandleNameChange = this.onHandleNameChange.bind(this);
    this.onHandleAgeChange = this.onHandleAgeChange.bind(this);
    this.onHandleResize = this.onHandleResize.bind(this);
  }

  componentDidMount() {
    const { name, age } = this.state;
    document.title = `${name} | ${age}`;
    window.addEventListener('resize', this.onHandleResize);
  }

  componentDidUpdate() {
    const { name, age } = this.state;
    document.title = `${name} | ${age}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onHandleResize);
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

  onHandleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { name, age, width } = this.state;
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
        <section className="row">
          <span>Width</span>
          <input type="text" value={width} disabled />
        </section>
      </Fragment>
    );
  }
}
