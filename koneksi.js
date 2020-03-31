var mysql = requiere("mysql");

//buat koneksi database
conts conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:" ",
    database:"dbrestapi"
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("Mysql terkoneksi");
});

module.exports = conn;