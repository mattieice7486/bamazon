const inquirer = require("inquirer");
const mysql = require("MYSQL");

const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3307,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
});

inquirer.prompt([

    {
      type: "input",
      name: "name",
      message: "Welcome to BAMAZON. Please enter your name."
    },
  
    {
      type: "list",
      name: "itemInfo",
      message: "I'm BAM, I'll be your guide to BAMAZON. What item are you interested in?",
      choices: ["", "", ""]
    },
  
    {
      type: "checkbox",
      name: "carryingWhat",
      message: "What are you carrying in your hands??",
      choices: ["TV", "Slice of Toast", "Butter Knife"]
    },
  
    {
      type: "confirm",
      name: "canLeave",
      message: "Can you leave now?"
    },
  
    {
      type: "password",
      name: "myPassword",
      message: "Okay fine. You can stay. But only if you say the magic password."
    }
  
  ]).then(function(user) {
  
    // If the user guesses the password...
    if (user.myPassword === "myHouse") {
  
      console.log("==============================================");
      console.log("");
      console.log("Well a deal's a deal " + user.name);
      console.log("You can stay as long as you like.");
      console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
      console.log("");
      console.log("==============================================");
    }
  
  
    // If the user doesn't guess the password...
    else {
  
      console.log("==============================================");
      console.log("");
      console.log("Sorry " + user.name);
      console.log("I'm calling the cops!");
      console.log("");
      console.log("==============================================");
  
    }
  });
  
  function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }