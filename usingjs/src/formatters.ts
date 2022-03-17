//@ts-nocheck

export function sizeFormatter(thing: string, count: number): void {
  writeMessage(`The ${thing} has ${count} items`);
}

export function costFormatter(thing: string, cost: number): void {
  writeMessage(`The ${thing} costs $${cost.toFixed(2)}`, true);
}
export function writeMessage(message: string): void {
  console.log(message);
}
