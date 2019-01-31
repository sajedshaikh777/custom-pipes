import { File.SizePipe } from './file.size.pipe';

describe('File.SizePipe', () => {
  it('create an instance', () => {
    const pipe = new File.SizePipe();
    expect(pipe).toBeTruthy();
  });
});
