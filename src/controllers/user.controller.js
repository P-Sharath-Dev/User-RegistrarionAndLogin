// Please don't change the pre-written code
// Import the necessary modules here
import { authenticateUser, registerUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    // Write your code here
    res.render("user-register");
  };
  getLogin = (req, res, next) => {
    // Write your code here
     res.render("user-login");
  };

  addUser = (req, res) => {
    // Write your code here
    //const {} = req.body;
    const status = registerUser(req.body);
    if(status){
      return res.render('user-login');
    }
    
    // res.status(200).json({success : true, message : "user registered successfully"});
    
  };
  loginUser = (req, res) => {
    // Write your code here
    // const {email, password} = req.body;


    const isAuthenticated = authenticateUser(req.body);
    if(isAuthenticated){
       res.json({success : "true", message : "login Successful"});
    }
    else {
       res.json({success : "false", message : "login failed"});
    }
  };
}
