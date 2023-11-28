export const memberController = {

  getLoginPage: async (req, res) => {
    try {
      const pageInfo = {
        pageTitle: "Login",
        pageStylesheet: '/public/styles/member.css',
        js: '/public/js/member.js'
      }
      res.render("member/index", pageInfo);
    } catch (e) {
      console.error(e);
    }
  },

  loginCheck: async (req, res) => {
    try {
      console.log("loginCheck PASS")
    } catch (e) {
      console.error(e);
    }
  },

  getSignupPage: async (req, res) => {
    try {
      const pageInfo = {
        pageTitle: "SignUp",
        pageStylesheet: '/public/styles/member.css',
        js: '/public/js/member.js'
      }
      res.render("member/signup", pageInfo);
    } catch (e) {
      console.error(e);
    }
  },

  signupCheck: async (req, res) => {
    try {

    } catch (e) {
      console.error(e);
    }
  },


}