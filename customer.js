const inquirer = require("inquirer");
const mysql = require("MYSQL");

const connection = mysql.createConnection({
    host: "localhost",
  
    port: 3307,
  
    user: "root",
  
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start() {
    inquirer.prompt([

    {
      type: "input",
      name: "name",
      message: "Welcome to BAMAZON. Please enter your name."
    },
  
    {
      type: "list",
      name: "itemList",
      message: `Hello, I'm BAM, I'll be your guide to BAMAZON. Would you like to browse our catalog?`,
      choices: ["yes", "no"]
    }
  
  ]).then(function(user) {
  
    if (user.itemList === "yes") {
        catalog();
      }
      else {
        console.log(`No problem. Thanks for stopping by, ${user.name}!`);
        connection.end();
      }
    });
};

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
}

function catalog() {
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);
              }
              return choiceArray;
            },
            message: "What book would you like to buy?\n"
          },
          {
            name: "bid",
            type: "input",
            message: "How many would you like to purchase?"
          }
        ])
        .then(function(answer) {
          var chosenItem;
          for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === answer.choice) {
              chosenItem = results[i];
            }
          }
  
          if (chosenItem.stock_quantity > parseInt(answer.bid)) {
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: answer.bid
                },
                {
                  id: chosenItem.id
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("Thank you for your Purchase! Your total comes to $" + (chosenItem.price * chosenItem.stock_quantity));
                start();
              }
            );
          }
          else {
            console.log("Sorry! We don't have enough of that item to fulfill your order!");
            start();
          }
        });
    });
}