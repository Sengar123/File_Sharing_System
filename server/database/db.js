import mongoose from 'mongoose';


const DBConnection= async ()=>{
    const DB_URL=`mongodb://officialsmrati:Smrati%40123@ac-qzvqmxy-shard-00-00.7el4son.mongodb.net:27017,ac-qzvqmxy-shard-00-01.7el4son.mongodb.net:27017,ac-qzvqmxy-shard-00-02.7el4son.mongodb.net:27017/?ssl=true&replicaSet=atlas-znwqlk-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
      await mongoose.connect(DB_URL,{useNewUrlParser: true, // Unified topology, remove 'useNewUrlParser'
      useUnifiedTopology: true, // Add 'useUnifiedTopology'
      });
      console.log('Database connected successfully');
    }
    catch(error){
        console.error('error while connecting with the database',error.message);
    }
}
export default DBConnection;