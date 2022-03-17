export class Person {
  constructor(public name: string, public city: string) {}
}
export class Product {
  constructor(public name: string, public price: number) {}

  print() {
    console.log(this.name);
  }
}
export class City {
  constructor(public name: string, public population: number) {}
}
export class Employee {
  constructor(public name: string, public role: string) {}
}
