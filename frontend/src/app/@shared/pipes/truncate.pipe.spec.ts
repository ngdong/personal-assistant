import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  const longStr = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('it should truncate', () => {
    const pipe = new  TruncatePipe();
    const expected = 'Lorem Ipsum is simply dum...';
    expect(pipe.transform(longStr)).toBe(expected);
  });

  it('it should truncate with length 16 char', () => {
    const pipe = new  TruncatePipe();
    const expected = 'Lorem Ipsum is s...';
    expect(pipe.transform(longStr, 16)).toBe(expected);
  });

  it('it should truncate complete work', () => {
    const pipe = new  TruncatePipe();
    const expected = 'Lorem Ipsum...';
    expect(pipe.transform(longStr, 12, true)).toBe(expected);
  });

  it('ellipsis should be ***', () => {
    const pipe = new  TruncatePipe();
    const expected = 'Lorem Ipsum***';
    expect(pipe.transform(longStr, 12, true, '***')).toBe(expected);
  });

  it('expect should be empty', () => {
    const pipe = new  TruncatePipe();
    const expected = '';
    expect(pipe.transform(undefined)).toBe(expected);
  });

});
