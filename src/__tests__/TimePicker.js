import {createElement, Component} from 'rax';
import renderer from 'rax-test-renderer';
import TimePicker from '..';

describe('TimePicker', () => {
  it('should render TimePicker', () => {
    const tree = renderer.create(
      <TimePicker selectedValue={'10:10'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

