const func = require('../q3')
const input1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const input2 = [[2, 4, 8], [10, 12, 14], [6, -4]]
const input3 = [[1], [2], [3], [4], [0]]
const input4 = []
const input5 = [[-5, -2, 0, 2, 5], [-1], [-6, -4, 4, 6]]

test('outputs the correct array 1', () => {
  expect(func(input1)).toEqual([6,24]);
});

test('outputs the correct array 2', () => {
  expect(func(input2)).toEqual([14,36,2])
});

test('outputs the correct array 3', () => {
  expect(func(input3)).toEqual([2,4,0]);
});

test('outputs the correct array 4', () => {
  expect(func(input4)).toEqual([]);
});

test('outputs the correct array 5', () => {
  expect(func(input5)).toEqual([0, 0]);
});
