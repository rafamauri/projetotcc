module.exports = class LogoutAdminController {
  static async logoutAdmin(req, res) {
    req.session.logged = false;
    res.clearCookie("tokenAdmin");
    res.redirect("/admin");
  }
};
