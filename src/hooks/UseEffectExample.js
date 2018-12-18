import React, { Fragment, useState, useEffect } from 'react';

export default function Title() {
  const [name, setName] = useState('小桌子');
  const [age, setAge] = useState(19);
  useEffect(() => {
    document.title = `${name} | ${age}`;
  });
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
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
      <section className="row">
        <span>Height</span>
        <input type="text" value={height} disabled />
      </section>
    </Fragment>
  );
}
