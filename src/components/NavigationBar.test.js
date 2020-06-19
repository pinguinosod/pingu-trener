import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationBar from './NavigationBar';

configure({adapter : new Adapter()});

describe('NavigationBar', () => {

  it('shoud render 2 buttons, first with text Viaje and second with text Mis Datos', () => {
    const wrapper = shallow(<NavigationBar />);

    expect(wrapper.find('button')).toHaveLength(2);
    expect(wrapper.find('button:first-child').text()).toBe('Viaje');
    expect(wrapper.find('button:last-child').text()).toBe('Mis Datos');
  });  

  it('shoud give .active class to first button when selected tab is viaje', () => {
    const wrapper = shallow(<NavigationBar selectedTab={'viaje'} />);

    expect(wrapper.find('button:first-child').hasClass('active')).toBeTruthy();
    expect(wrapper.find('button:last-child').hasClass('active')).toBeFalsy();
  });  

  it('shoud give .active class to second button when selected tab is datos', () => {
    const wrapper = shallow(<NavigationBar selectedTab={'datos'} />);

    expect(wrapper.find('button:first-child').hasClass('active')).toBeFalsy();
    expect(wrapper.find('button:last-child').hasClass('active')).toBeTruthy();
  });

  it('shoud call changeTab method with viaje as parameter when first button is clicked', () => {
    const mockChangeTab = jest.fn();
    const wrapper = shallow(<NavigationBar changeTab={mockChangeTab} />);
    
    wrapper.find('button:first-child').simulate('click');

    expect(mockChangeTab).toHaveBeenCalledWith('viaje');
  });

  it('shoud call changeTab method with datos as parameter when second button is clicked', () => {
    const mockChangeTab = jest.fn();
    const wrapper = shallow(<NavigationBar changeTab={mockChangeTab} />);
    
    wrapper.find('button:last-child').simulate('click');

    expect(mockChangeTab).toHaveBeenCalledWith('datos');
  });

});
