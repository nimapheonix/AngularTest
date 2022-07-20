import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });
  //
  //
  it('should display weak if grade is 1', () => {
    let pipe = new GradePipe();
    let val = pipe.transform(1);
    expect(val).toEqual('1 (weak)');
  });
  //
  it('should display medium if grade is 2', () => {
    let pipe = new GradePipe();
    let val = pipe.transform(2);
    expect(val).toEqual('2 (medium)');
  });
  //
  it('should display strong if grade is 3', () => {
    let pipe = new GradePipe();
    let val = pipe.transform(3);
    expect(val).toEqual('3 (strong)');
  });
  //
  it('should display good if grade is 4', () => {
    let pipe = new GradePipe();
    let val = pipe.transform(4);
    expect(val).toEqual('4 (good)');
  });
  //
  it('should display excelent if grade is 5', () => {
    let pipe = new GradePipe();
    let val = pipe.transform(5);
    expect(val).toEqual('5 (excelent)');
  });
  //
});



