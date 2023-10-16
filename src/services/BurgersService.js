import { burgerDb } from "../db/BurgerDb.js"
import { Burger } from "../models/Burger.js"

class BurgersService {

  async getBurgers() {
    const burgers = await burgerDb.burgers
    return burgers
  }

  async createBurger(burgerData) {
    // TEMP ID THING JEREMY DID
    if (burgerDb.burgers.length == 0) {
      burgerData.id = 1
    }
    else {
      const burgerIds = burgerDb.burgers.map(burger => burger.id)
      const largestBurgerId = Math.max(...burgerIds)
      burgerData.id = largestBurgerId + 1
    }

    const newBurger = new Burger(burgerData)
    await burgerDb.burgers.push(newBurger)
    return newBurger
  }

  async deleteBurger(burgerId) {
    const burgers = burgerDb.burgers
    const burgerIndex = burgers.findIndex(burger => burger.id == burgerId)

    burgers.splice(burgerIndex, 1)
  }

  async updateBurger(burgerId, burgerData) {
    //TODO find out how to implement an update
  }

}

export const burgersService = new BurgersService()