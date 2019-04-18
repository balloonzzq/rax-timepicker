import {createElement} from 'rax';
import renderer from 'rax-test-renderer';
import TimePicker from '..';

jest.mock('universal-env', () => {
  return {
    isWeex: true
  };
});

describe('Picker in weex', () => {
  it('render tag Picker', () => {
    const tree = renderer.create(
      <TimePicker selectedValue={'10:10'} />
    ).toJSON();
    expect(tree.children[0].tagName).toEqual('SPAN');
  });
});
