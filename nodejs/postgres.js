const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "database-1.c5ceztuyruqq.ap-northeast-2.rds.amazonaws.com",
  database: "aws_db",
  password: "jmin0330^^",
  port: 5432,
});

client.connect();

client.query("SELECT * FROM PG_SHADOW", (err, res) => {
  console.log(err, res);
  client.end();
});
