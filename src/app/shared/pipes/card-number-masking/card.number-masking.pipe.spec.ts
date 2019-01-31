import { Card.NumberMaskingPipe } from './card.number-masking.pipe';

describe('Card.NumberMaskingPipe', () => {
  it('create an instance', () => {
    const pipe = new Card.NumberMaskingPipe();
    expect(pipe).toBeTruthy();
  });
});
