import { ReverseStringPipe } from './reverse.pipe';

describe('ReverseStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseStringPipe();
    expect(pipe).toBeTruthy();
  });
});
