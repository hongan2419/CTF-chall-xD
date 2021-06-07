var config = {};
config.db = {
    host: process.env.MYSQL_HOST || "db",
    database: process.env.MYSQL_DATABASE || "blog",
    user: process.env.MYSQL_USER || "admin",
    password: process.env.MYSQL_PASSWORD || "password"
}
config.session = {
    secret: "random secret",  
    resave: true,
    saveUninitialized: true,
}

config.admin = {
    password: "secureP4ssword1@3"
}

module.exports = config;