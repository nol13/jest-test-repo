import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { B } from '../../TestComponents/b';
import toJson from 'enzyme-to-json';

describe('B', () => {
  it('renders', () => {
    let wrapper = mount(
      <B someprop={6} />
    );
    global.expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('div').length).to.equal(2);
  });
});
