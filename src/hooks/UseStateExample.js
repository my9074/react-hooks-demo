import React, { Fragment, useState } from 'react';

export default function Greeting() {
  const [name, setName] = useState('小凳子');
  const [age, setAge] = useState(19);
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleAgeChange(e) {
    setAge(e.target.value);
  }
  return (
    <Fragment>
      <section className="row">
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </section>
      <section className="row">
        <span>Age</span>
        <input type="text" value={age} onChange={handleAgeChange} />
      </section>
    </Fragment>
  );
}
