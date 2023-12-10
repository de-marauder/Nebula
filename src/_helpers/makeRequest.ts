// import mongoose, { Mongoose } from 'mongoose'
// import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
// import { UserModel } from './_models/user';
// import { ErrorResponse } from '../../_helpers/ErrorRepsonse';

// export default async function makeRequest(cb: (req: NextApiRequest, res: NextApiResponse, next?: NextApiHandler) => void) {
//   const dbUrl = process.env.DB_URL;
//   console.log(dbUrl)
//   if (dbUrl) {
//     let db
//     try {
//       db = await mongoose.connect(dbUrl);
//       db.connection.on('error', console.error.bind(console, 'connection error:'));
//       db.connection.once('open', () => {
//         console.log('Database connected');
//       });
//       cb()
//       db.disconnect();
//     } catch (error) {
//       console.debug(error)
//       if (db instanceof Mongoose) {
//         db.disconnect()
//       }
//       return res.status(500).json({
//         status: 'failed',
//         message: 'Database connection error'
//       })
//     }
//   } else {
//     return res.status(500).json({
//       status: 'failed',
//       message: 'Database connection URL not found'
//     })
//   }

// }