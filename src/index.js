import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.scss';
// Helpers
import Section from './helpers/Section';
// Examples
import GreetingClass from './hooks/WithoutUseState';
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
        </Section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
