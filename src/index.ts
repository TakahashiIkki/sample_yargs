function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const result = getRandomInt(3);

if (result === 2) {
  throw new Error(`I am Error ${result}`);
}

console.log(`resule is ${result}`);
process.exit(0);
