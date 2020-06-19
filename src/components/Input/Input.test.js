import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

configure({adapter : new Adapter()});

describe('Input', () => {

  it('should render header with text Viaje', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.find('h3').text()).toBe('Viaje');
  });

  it('shoud add class hidden when displayed prop is false', () => {
    const wrapper = shallow(<Input displayed={false} />);

    expect(wrapper.find('div.travel-input').hasClass('hidden')).toBeTruthy();
  });

  it('shoud not add class hidden when displayed prop is true', () => {
    const wrapper = shallow(<Input displayed={true} />);

    expect(wrapper.find('div.travel-input').hasClass('hidden')).toBeFalsy();
  });

  it('shoud render a button with text Buscar if isLoading prop is false', () => {
    const wrapper = shallow(<Input isLoading={false} />);

    expect(wrapper.find('button').text()).toBe('Buscar');
  });

  it('shoud render a button with fontawesome icon if isLoading prop is true', () => {
    const wrapper = shallow(<Input isLoading={true} />);

    expect(wrapper.find('button').text()).toBe("<FontAwesomeIcon />");
  });

  it('shoud call getNextTrain method when search button is clicked', () => {
    const mockGetNextTrain = jest.fn();
    const wrapper = shallow(<Input getNextTrain={mockGetNextTrain} />);

    wrapper.find('button').simulate('click');

    expect(mockGetNextTrain).toHaveBeenCalledTimes(1);
  });

  it('shoud call getNextTrain with correct parameters when search button is clicked', () => {
    const mockGetNextTrain = jest.fn();
    const wrapper = shallow(<Input getNextTrain={mockGetNextTrain} />);

    wrapper.find('select[name=\'origen\']').simulate('change', {target: { value : '3'}});
    wrapper.find('select[name=\'destino\']').simulate('change', {target: { value : '4'}});
    wrapper.find('button').simulate('click');

    expect(mockGetNextTrain).toHaveBeenCalledWith('3','4');
  });

});
