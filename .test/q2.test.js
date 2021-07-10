const func = require('../q2')

  test('outputs the correct data type 1', () => {
    expect(func([1,2,3])).toBeTruthy();
  });
  
  test('outputs the correct data type 2', () => {
    expect(func(["hello",true,0])).toBeFalsy();
  });
  
  test('outputs the correct data type 3', () => {
    expect(func(["Only","string","array"])).toBeTruthy();
  });

  test('outputs the correct data type 4', () => {
    expect(func([])).toBeTruthy();
  });

  test('outputs the correct data type 5', () => {
    expect(func([undefined, undefined, undefined])).toBeTruthy();
  });

  test('outputs the correct data type 6', () => {
    expect(func([undefined, false, null])).toBeFalsy();
  });
  