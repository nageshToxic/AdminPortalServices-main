const env = {
    coreMongo: {
        URI: "mongodb+srv://snapbizz-test:7gobh0H8L4EI2315@db-mongodb-blr1-billing-test-dfaf4c81.mongo.ondigitalocean.com/snapbizz-test?tls=true&authSource=admin&replicaSet=db-mongodb-blr1-billing-test&retryWrites=true&w=majority&maxPoolSize=10",
        database: "snapbizz-test",
    },
    mysql: {
        host: "test-env.cdk9hhiadl8k.ap-south-1.rds.amazonaws.com",
        username: "dev",
        database: "snapbizz",
        password: "test@(ment)",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 100000,
            idle: 10000,
        },
      },  
};
module.exports = env;