const database = require("../database/database");

module.exports = class PageModel {
  static async selectAllPages() {
    const selectAllPages = "SELECT * FROM pages;";
    const [result] = await database.query(selectAllPages);

    return result;
  }

  static async selectPageById(page_id) {
    const selectAllPages = "SELECT * FROM pages WHERE page_id = ?;";
    const [[result]] = await database.query(selectAllPages, [page_Id]);

    return result;
  }

  static async insertPages(page) {
    const { page_tittle, page_status, page_content, position_positon_id } =
      page;
    const insertPages =
      "INSERT INTO pages (page_title, page_status, page_content, position";
    const [result] = await database.query(insertPages, [
      page_title,
      page_status,
      page_content,
      position_positon_id,
    ]);
    return result;
  }
  static async updatePage(oage_id, page){
    const{ page_title, page_status, page_content, position_positon_id}
};
