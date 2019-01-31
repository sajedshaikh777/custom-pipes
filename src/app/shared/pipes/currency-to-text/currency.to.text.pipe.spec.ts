import { Currency.To.TextPipe } from './currency.to.text.pipe';

describe('Currency.To.TextPipe', () => {
  it('create an instance', () => {
    const pipe = new Currency.To.TextPipe();
    expect(pipe).toBeTruthy();
  });
});
