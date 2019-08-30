import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { A } from '../../TestComponents/a';
import toJson from 'enzyme-to-json';

describe('A', () => {
  it('renders', () => {
    let wrapper = mount(
      <A someprop={3} />
    );
    global.expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('div').length).to.equal(1);
  });
});
