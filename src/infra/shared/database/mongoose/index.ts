import mongoose from 'mongoose'

import mongoConfig from '../../../../config/mongo';

export class Database {

  public async mongoConnection(): Promise<void> {
    const { username, password, host, port, db, authSource } = mongoConfig

    await mongoose.connect(
      `mongodb://${host}:${port}/${db}?authSource=${authSource}`,
      {        
        auth: {
          username,
          password
        },                
      }, 
      (error: any) => 
      {
        if (error)
          console.log("🔴 Server couldn't connect to MongoDB ❌ \n", error);
        else
          console.log('🟢 Server connected to MongoDB ✔');        
      }
    )
  }

}