import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserConfiguration from './UserConfiguration';

configure({adapter : new Adapter()});

describe('UserConfiguration', () => {

  it('should render header with text Mis Datos', () => {
    const wrapper = shallow(<UserConfiguration />);

    expect(wrapper.find('h3').text()).toBe('Mis Datos');
  });

  it('shoud render a select element with 4 options', () => {
    const wrapper = shallow(<UserConfiguration />);

    expect(wrapper.find('select')).toHaveLength(1);
    expect(wrapper.find('select option')).toHaveLength(4);
    expect(wrapper.find('select option').at(0).text()).toBe('General');
    expect(wrapper.find('select option').at(1).text()).toBe('Estudiante');
    expect(wrapper.find('select option').at(2).text()).toBe('Adulto Mayor');
    expect(wrapper.find('select option').at(3).text()).toBe('Persona con Discapacidad');
  });

  it('shoud call changeProfile with selected\'s profile code when select is changed', () => {
    const mockChangeProfile = jest.fn();
    const wrapper = shallow(<UserConfiguration changeProfile={mockChangeProfile} />);

    wrapper.find('select').simulate('change', {target: { value : '1'}});

    expect(mockChangeProfile).toHaveBeenCalledWith('1');
  });

  it('shoud add class hidden when displayed prop is false', () => {
    const wrapper = shallow(<UserConfiguration displayed={false} />);

    expect(wrapper.find('div.user-configuration').hasClass('hidden')).toBeTruthy();
  });

  it('shoud not add class hidden when displayed prop is true', () => {
    const wrapper = shallow(<UserConfiguration displayed={true} />);

    expect(wrapper.find('div.user-configuration').hasClass('hidden')).toBeFalsy();
  });

});
