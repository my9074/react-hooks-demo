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
import { CustomHook } from './hooks/UseCustomHooks';

const VISIBLE = {
  IS_USE_STATE_VISIBLE: 'UseStateExample',
  IS_USE_EFFECT_VISIBLE: 'UseEffectExample',
  IS_USE_CUSTOM_HOOKS_VISIBLE: 'UseCustomHooks',
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
            <h1 className="heading">Use Hook</h1>
            <Greeting />
          </div>
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
            <h1 className="heading">Use Hook</h1>
            <Title />
          </div>
          <div>
            <h1 className="heading">Class</h1>
            <TitleClass />
          </div>
        </Section>
        <Section
          isVisible={isVisible.includes(VISIBLE.IS_USE_CUSTOM_HOOKS_VISIBLE)}
          heading="useCustomHooks"
          sectionBg="purple-bg"
        >
          <div>
            <h1 className="heading">Use Hook</h1>
            <CustomHook />
          </div>
        </Section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
