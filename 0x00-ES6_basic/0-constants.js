// Modify the functions with const and let

export function taskFirst() {
  const task = 'I prefer const where I can.';
  return task;
}

export function getLast() {
  return 'is okay';
}

export function taskNext() {
  let combination = 'But sometimes let ';
  combination += getLast();
  return combination;
}
