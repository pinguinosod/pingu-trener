import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Result from './Result';

configure({adapter : new Adapter()});

describe('Result', () => {
  const nextTrainMock = { timeToNextTrain: "", cost: "", travelDuration: "" };

  it('should render header with text Datos', () => {
    const wrapper = shallow(<Result nextTrain={nextTrainMock} selectedProfile={0} />);

    expect(wrapper.find('h3').text()).toBe('Datos');
  });

  it('should append General to Costo label when selectedProfile is General\'s code', () => {
    const wrapper = shallow(<Result nextTrain={nextTrainMock} selectedProfile={0} />);

    expect(wrapper.find('label').at(1).text()).toBe('Costo General');
  });

  it('should append Adulto Mayor to Costo label when selectedProfile is Adulto Mayor\'s code', () => {
    const wrapper = shallow(<Result nextTrain={nextTrainMock} selectedProfile={2} />);

    expect(wrapper.find('label').at(1).text()).toBe('Costo Adulto Mayor');
  });

  it('shoud add class hidden when displayed prop is false', () => {
    const wrapper = shallow(<Result displayed={false} nextTrain={nextTrainMock} selectedProfile={0} />);

    expect(wrapper.find('div.travel-result').hasClass('hidden')).toBeTruthy();
  });

  it('shoud not add class hidden when displayed prop is true', () => {
    const wrapper = shallow(<Result displayed={true} nextTrain={nextTrainMock} selectedProfile={0} />);

    expect(wrapper.find('div.travel-result').hasClass('hidden')).toBeFalsy();
  });

});
