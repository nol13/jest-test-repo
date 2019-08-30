import React from 'react';
import { mount } from 'enzyme';
import { B } from '../../TestComponents/b';
import toJson from 'enzyme-to-json';

describe('B', () => {
  it('renders', () => {
    let wrapper = mount(
      <B someprop={6} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('div').length).toEqual(2);
  });
});
