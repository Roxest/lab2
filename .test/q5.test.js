const func = require('../q5')

const ms1 = [ 
  {id: 1, power: 5, members: []}, 
  {id: 2, power: 30, members: []}, 
  {id: 3, power: 60, members: []}, 
  {id: 4, power: 42, members: []}, 
  {id: 5, power: 70, members: []}, 
] 
const fs1=[5, 2, 4, 3, 1, 3]

const ms2 = [
  {id: 1, power: 100, members: []},
  {id: 2, power: 100, members: []},
  {id: 3, power: 100, members: []},
  {id: 4, power: 101, members: []},
]
const fs2 = [1, 2, 3, 1, 2, 3]

const ms3 = [
  {id: 1, power: -50, members: []},
  {id: 2, power: -100, members: []},
  {id: 3, power: 20, members: []},
]
const fs3 = [1, 2, 3, 1]

const output1 = { id: 3, power: 107, members: [ 4, 1 ] }
const output2 = { id: 4, power: 101, members: []}
const output3 = { id: 2, power: -100, members: []}


test('outputs the correct object 1', () => {
    expect(func(ms1,fs1)).toEqual(output1);
  });

test('outputs the correct object 2', () => {
  expect(func(ms2,fs2)).toEqual(output2);
});

test('outputs the correct object 3', () => {
  expect(func(ms3,fs3)).toEqual(output3);
});
