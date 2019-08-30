import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { C } from '../../TestComponents/c';
import { B } from '../../TestComponents/b';
import toJson from 'enzyme-to-json';

describe('C', () => {
  it('renders c', () => {
    let wrapper = mount(
      <C someprop={6} />
    );
    global.expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('div').length).to.equal(3);
  });
  it('renders b again', () => {
    let wrapper = mount(
      <B someprop={6} />
    );
    global.expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('div').length).to.equal(2);
  });
});
