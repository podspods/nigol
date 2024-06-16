import mongoose from 'mongoose';

export async function connect() {

  if (!process.env.MONGO_URL) throw new Error('Please set your MONGO_URI environment variable');

  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('----------------- MongoDb connected successfully ------------------');
    });
  } catch (error) {
    console.error('error connect ', error);
  }

}
