const database = require("../database/database");

// module.exports = class RegisterUserModel {
//   getByEmail(getEmailFromUserController) {
//     const selectEmail = "SELECT user_email FROM users WHERE user_email = ?";
//     return new Promise((resolve, reject) => {
//       database.query(
//         selectEmail,
//         [getEmailFromUserController],
//         (error, result) => {
//           console.log("Estamos no Model");
//           console.log(getEmailFromUserController);

//           return resolve(result);
//         }
//       );
//     });
//   }
// };

module.exports = class RegisterUserModel {
  static async getUserByEmail(getEmailFromUserController) {
    const selectEmail = "SELECT user_email FROM user WHERE user_email = ?";
    const [[result]] = await database.query(selectEmail, [
      getEmailFromUserController,
    ]);
    return result;
  }
};
