import { Charactor.CountPipe } from './charactor.count.pipe';

describe('Charactor.CountPipe', () => {
  it('create an instance', () => {
    const pipe = new Charactor.CountPipe();
    expect(pipe).toBeTruthy();
  });
});
