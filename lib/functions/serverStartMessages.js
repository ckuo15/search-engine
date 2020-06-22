// Imports
const address = require("address");
const qrcode = require("qrcode-terminal");

function serverStartMessages(err, port) {
  if (err) throw err;

  console.log(`> Env ${process.env.WILD_ENV} Ready on Port: ${port}`); 

  const url = `http://${address.ip()}:${port}`;
  qrcode.generate(url, { small: true });
}

module.exports = serverStartMessages;
