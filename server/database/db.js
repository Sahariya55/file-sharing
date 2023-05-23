import mongoose from "mongoose";

const DBConnection = async () =>{
    const MONODB_URI =`mongodb://user:sahariya552001@ac-zprapim-shard-00-00.sipnt9x.mongodb.net:27017,ac-zprapim-shard-00-01.sipnt9x.mongodb.net:27017,ac-zprapim-shard-00-02.sipnt9x.mongodb.net:27017/?ssl=true&replicaSet=atlas-ktb870-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
      await mongoose.connect(MONODB_URI,{useNewUrlParser: true});
      console.log('Database connected successfully');
    }catch(error){
       console.error('Error while connecting with the database',error.meessage);
    }
}
export default DBConnection;