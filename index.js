const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const { products, cart, profile, comments } = require("./api");
const path = require("path");

const consoleHelper = (msg) => {
  return console.log(msg);
};

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/cart":
        const productIdsAndPrices = products.map((item) => {
          return {
            id: item.id,
            price: item.price,
          };
        });
        const newCrats = cart.map((cartItem) => {
          const selectedIndex = productIdsAndPrices.findIndex(
            (item) => item.id === cartItem.productId
          );
          return {
            ...cartItem,
            price: cartItem.quantity * productIdsAndPrices[selectedIndex].price,
          };
        });
        res.write(JSON.stringify(newCrats));
        res.end(() => consoleHelper("carts Data Read By User"));
        break;
      case "/profile":
        res.write(JSON.stringify(profile));
        res.end(() => consoleHelper("Profiles Sent To User !"));
        break;
      case "/comments":
        res.write(JSON.stringify(comments));
        res.end(() => consoleHelper("Comments Sent To user"));
        break;
      case "/fileupload":
        if (req.method.toLowerCase() === "post") {
          const formInHTML = new formidable.IncomingForm();
          formInHTML.parse(req, (err, fileds, files) => {
            if (err) console.log(err);
            const oldFilePath = files.input1Image.filepath;
            const newFilePath = path.join(
              __dirname,
              "uploads",
              `${Date.now()}${path.extname(files.input1Image.originalFilename)}`
            );
            fs.renameSync(oldFilePath, newFilePath);
          });
          res.write("uploaded !");
          res.end();
        } else {
          const htmlPage = fs.readFileSync("./html/uploadFile.html");
          res.write(htmlPage);
          return res.end(() => consoleHelper("get upload page"));
        }
        break;
    }
  })
  .listen(2500, console.log("server Started successful"));
