import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('/api/burgers')
    this.router
      .get('', this.getBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.deleteBurger)
      .put('/:burgerId', this.updateBurger)
  }

  async getBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getBurgers()
      return response.send(burgers)
    }
    catch (error) {
      next(error)
    }
  }

  async createBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgersService.createBurger(burgerData)
      response.send(burger)
    }
    catch (error) {
      next(error)
    }
  }

  async deleteBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      await burgersService.deleteBurger(burgerId)
      response.send(`You deleted the burger with id: ${burgerId}`)
    }
    catch (error) {
      next(error)
    }
  }

  async updateBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      const burgerData = request.body
      const burger = await burgersService.updateBurger(burgerId, burgerData)
      response.send(burger)
    }
    catch (error) {
      next(error)
    }
  }
}