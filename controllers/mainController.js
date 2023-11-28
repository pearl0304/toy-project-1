export const mainController = {
  getMainPage: async (req, res) => {
    try {
      const pageInfo = {
        pageTitle: "Main",
        pageStylesheet: '/public/styles/main.css',
        js: '/public/js/main.js',
      }
      res.render("main/index", pageInfo);
    } catch (e) {
      console.error(e);
    }
  },

  getStartQrCode: async (req, res) => {
    try {

    } catch (e) {
      console.error(e)
    }
  },

  getEndQrCode: async (req, res) => {
    try {

    } catch (e) {
      console.error(e);
    }
  },

}