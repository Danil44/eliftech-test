module.exports = {
  database: `mongodb+srv://danil44:${
    process.env.DB_PASS
  }@cluster0-wgmto.mongodb.net/test?retryWrites=true&w=majority`,
  port: 3001,
  secret: process.env.SECRET
};
