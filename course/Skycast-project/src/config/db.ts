import { connect } from "mongoose";


const mongoUrl = process.env.MONGO_URL;

if(!mongoUrl){
    throw new Error('MongoUrl was not found ')
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose={conn:null, promise:null}
}

const connectDb = async()=>{
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        cached.promise = connect(mongoUrl).then((mongooseInstance) => {
            console.log(`Connected to Db with host: ${mongooseInstance.connection.host}`);
            return mongooseInstance.connection;
        })
    }

    try{
        cached.conn = await cached.promise
    }catch(error){
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}

export default connectDb;