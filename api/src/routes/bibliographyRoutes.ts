const bibliographyController = require("../controllers/bibliographyController");
const bibliographyRouter = require("./router");
const bibliographyAuth = require("./../middleware/auth");

bibliographyRouter.get(
  "/",
  bibliographyAuth,
  bibliographyController.getBibliography
);
bibliographyRouter.post(
  "/",
  bibliographyAuth,
  bibliographyController.createEntry
);
bibliographyRouter.put(
  "/:id",
  bibliographyAuth,
  bibliographyController.updateEntry
);
bibliographyRouter.delete(
  "/:id",
  bibliographyAuth,
  bibliographyController.deleteEntry
);

module.exports = bibliographyRouter;
