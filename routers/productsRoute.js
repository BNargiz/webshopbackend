const { Router } = require("express");
const router = new Router();
const Categories = require("../models").categorie;
const Products = require("../models").product;

router.get("/", async (request, response, next) => {
  try {
    const products = await Products.findAll({
      include: {
        model: Categories,
      },
    });
    response.send(products);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const productById = await Products.findByPk(id, {
      raw: true,
      include: Categories,
    });
    response.send(productById);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
