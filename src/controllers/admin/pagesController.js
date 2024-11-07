const PageModel = require("../../models/pagesModels");
// const PositionModel = require("../../models/positionModel");

module.exports = class PagesController {
  static async getPages(req, res) {
    const adminUser = req.session.adminUser;
    const result = await PageModel.selectJoinPagesPosition();

    return res.render("pages", {
      adminUser,
      pages: result,
      msgSuccess: req.query.msgError,
    });
  }
  static async getCreatePages(req, res) {
    const adminUser = req.session.adminUser;
    // const getPosition = await PositionModel.selectAllPosition();

    return res.render("createPages", {
      adminUser,
      getPosition,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
    });
  }
  static async postCreatePages(req, res) {
    const { page_tittle, page_position_id, pages_status, page_content } =
      req.body;

    const statusBoolean = page_status === "publicado" ? 1 : 0;
    const position_position_id = Number(page_position_id);

    const page = {
      page_tittle,
      page_status: statusBoolean,
      page_content,
      position_position_id,
    };

    const result = await PageModel.insertPages(page);
    console.log(result);

    return res.redirect(
      "/pages/createPages?msgSuccess=Pagina criada com sucesso!"
    );
  }

  static async getEditPage(req, res) {
    const adminUser = req.session.adminUser;
    const getParams = req.params.id;

    const resultPosition = await PositionModel.selectAllPosition();
    const result = await PageModel.selectJoinPagesPositionById(getParams);

    return res.render("editPage", {
      adminUser,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
      page: result,
      positions: resultPosition,
    });
  }

  static async putEditPage(req, res) {
    const { page_tittle, page_position_id, page_status, page_content } =
      req.body;
    const getParms = req.params.id;

    const statusBoolean = page_status === "publicado" ? 1 : 0;
    const position_position_id = number(page_position_id);

    const getDataUpdate = {
      page_tittle,
      page_status: statusBoolean,
      page_content,
      position_position_id,
    };

    const result = await PageModel.updatePage(getParams, getDataUpdate);
    console.log(result);

    return res.redirect("/pages?msgSuccess=Atualizado com sucesso!");
  }

  static async deletePage(req, res) {
    const getId = req.params.id;

    const result = await PageModel.deletePage(getId);
    console.log(result);

    return res.redirect("/page");
  }
};
