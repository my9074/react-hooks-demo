import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.scss';
// Helpers
import Section from './helpers/Section';
// Examples
import Greeting from './hooks/UseStateExample';
import GreetingClass from './hooks/WithoutUseState';
import Title from './hooks/UseEffectExample';
import TitleClass from './hooks/WithoutUseEffect';

const VISIBLE = {
  IS_USE_STATE_VISIBLE: 'UseStateExample',
  IS_USE_EFFECT_VISIBLE: 'UseEffectExample',
};

class App extends Component {
  state = {
    isVisible: [VISIBLE.IS_USE_STATE_VISIBLE, VISIBLE.IS_USE_EFFECT_VISIBLE],
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <Section
          isVisible={isVisible.includes(VISIBLE.IS_USE_STATE_VISIBLE)}
          heading="useState"
          sectionBg="purple-bg"
        >
          <div>
            <h1 className="heading">Class</h1>
            <GreetingClass />
          </div>
          <div>
            <h1 className="heading">Use Hook</h1>
            <Greeting />
          </div>
        </Section>
        <Section
          isVisible={isVisible.includes(VISIBLE.IS_USE_EFFECT_VISIBLE)}
          heading="useEffect"
          sectionBg="gainsboro-bg"
        >
          <div>
            <h1 className="heading">Class</h1>
            <TitleClass />
          </div>
          <div>
            <h1 className="heading">Use Hook</h1>
            <Title />
          </div>
        </Section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
