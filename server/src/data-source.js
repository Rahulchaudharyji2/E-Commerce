const mongoose = require('mongoose');

const dbUrl = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/E-Comm';


class Database{
    static async connect() {
        try {
            await mongoose.connect(dbUrl);
        
        }
        catch (err) {
            console.error(err);
        }
    }

    static async disconnect() {
        try {
            await mongoose.disconnect();
        }
        catch (err) {
            console.error(err);
        }
    }
}

module.exports = Database;