const router = require("express").Router();
const bookController = require('../controller/bookController');
const gController = require("../controller")

router.route('/api/books')
    .get(bookController.findAll)
    .post(bookController.create)

router.route('/api/books/:id')
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.delete)


router.route("/api/google/books").get(gController.findAll)

module.exports = router;