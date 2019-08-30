import React from 'react';
import { mount } from 'enzyme';
import { C } from '../../TestComponents/c';
import { B } from '../../TestComponents/b';
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
