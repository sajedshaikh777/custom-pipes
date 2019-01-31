import { Word.CountPipe } from './word.count.pipe';

describe('Word.CountPipe', () => {
  it('create an instance', () => {
    const pipe = new Word.CountPipe();
    expect(pipe).toBeTruthy();
  });
});
