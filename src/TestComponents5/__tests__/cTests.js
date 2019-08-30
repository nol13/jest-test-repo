import React from 'react';
import { mount } from 'enzyme';
import { C } from '../c';
import { B } from '../b';
import toJson from 'enzyme-to-json';

describe('C', () => {
  it('renders c', () => {
    let wrapper = mount(
      <C someprop={6} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(3);
  });
  it('renders b again', () => {
    let wrapper = mount(
      <B someprop={6} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
