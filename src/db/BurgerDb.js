import { Burger } from "../models/Burger.js"

class BurgerDb {
  constructor() {

    this.burgers = [
      new Burger({ id: '1', name: 'bacon burger', price: 10.99 }),
      new Burger({ id: '2', name: 'kids burger', price: 4.99 })
    ]
  }
}

export const burgerDb = new BurgerDb()