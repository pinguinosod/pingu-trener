import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Input from './components/Input';
import Result from './components/Result';
import UserConfiguration from './components/UserConfiguration';
import NavigationBar from './components/NavigationBar';

configure({adapter : new Adapter()});

describe('App', () => {

  it('shoud render header, nav and main', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find('main')).toHaveLength(1);
  });

  it('shoud render Pingu Trener as title', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('header > h1').text()).toBe('Pingu Trener');
  });

  it('shoud render Input, Result, UserConfiguration and NavigationBar', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('nav').find(NavigationBar)).toHaveLength(1);
    expect(wrapper.find('main').find(Input)).toHaveLength(1);
    expect(wrapper.find('main').find(Result)).toHaveLength(1);
    expect(wrapper.find('main').find(UserConfiguration)).toHaveLength(1);
  });
});
