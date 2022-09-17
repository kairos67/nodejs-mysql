const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "",
  database: "",
  password: "",
  port: ,
});

client.connect();

client.query("SELECT * FROM PG_SHADOW", (err, res) => {
  console.log(err, res);
  client.end();
});
