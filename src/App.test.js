import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Input from './components/Input/Input';
import Result from './components/Result/Result';
import UserConfiguration from './components/UserConfiguration/UserConfiguration';
import Navigation from './components/Navigation/Navigation';
import axios from 'axios';

jest.mock('axios');

configure({ adapter: new Adapter() });

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

  it('shoud render Input, Result, UserConfiguration and Navigation', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('nav').find(Navigation)).toHaveLength(1);
    expect(wrapper.find('main').find(Input)).toHaveLength(1);
    expect(wrapper.find('main').find(Result)).toHaveLength(1);
    expect(wrapper.find('main').find(UserConfiguration)).toHaveLength(1);
  });

  it('should show alert with error message if no origin / destination are selected', () => {
    const wrapper = mount(<App />);
    jest.spyOn(window, 'alert').mockImplementation(() => { });

    wrapper.find(Input).find('button').simulate('click');

    expect(window.alert).toBeCalledWith('Debe seleccionar Origen y Destino');
  });


  it('should show alert with error message if no destination is selected', () => {
    const wrapper = mount(<App />);
    jest.spyOn(window, 'alert').mockImplementation(() => { });

    wrapper.find(Input).find('select[name="origen"]').simulate('change', { target: { value: '2' } });

    wrapper.find(Input).find('button').simulate('click');

    expect(window.alert).toBeCalledWith('Debe seleccionar Origen y Destino');
  });


  xit('should update result values when button Buscar is clicked', () => { // todo: fix
    const wrapper = mount(<App />);

    const result = {
      data: {
        timeToNextTrain: "ccc", cost: "bbb", travelDuration: "aaa"
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(result));

    wrapper.find(Input).find('select[name="origen"]').simulate('change', { target: { value: '2' } });
    wrapper.find(Input).find('select[name="destino"]').simulate('change', { target: { value: '4' } });

    wrapper.find(Input).find('button').simulate('click');

    expect(axios.get).toHaveBeenCalledWith('/next/', {
      params: { origin: "2", destination: "4", profile: 0 }
    });

    expect(wrapper.find(Result).props().nextTrain).toBe(result.data);

    expect(wrapper.find(Result).find('input[name="proximo"]').props().value).toBe('ccc');
    expect(wrapper.find(Result).find('input[name="costo"]').props().value).toBe('bbb');
    expect(wrapper.find(Result).find('input[name="tiempo"]').props().value).toBe('aaa');
  });

});
