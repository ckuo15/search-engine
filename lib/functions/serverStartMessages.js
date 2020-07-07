
function serverStartMessages(err, port) {
  if (err) throw err;
  console.log(`> Env ${process.env.WILD_ENV} Ready on Port: ${port}`); 

}

module.exports = serverStartMessages;
