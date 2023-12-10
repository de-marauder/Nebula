import mongoose, { Mongoose } from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next';
import { UserModel } from './_models/user';
import { ErrorResponse } from '../../_helpers/ErrorRepsonse';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dbUrl = process.env.DB_URL;
  console.log(dbUrl)
  if (dbUrl) {
    let db
    try {
      db = await mongoose.connect(dbUrl);
      db.connection.on('error', console.error.bind(console, 'connection error:'));
      db.connection.once('open', function () {
        console.log('Database connected');
      });
      if (req.method === 'GET') {
        if (req.query.did) {
          const user = await UserModel.findOne({ did: req.query.did });
          res.status(200).json({
            status: 'success',
            data: [user],
          })
        }
        const users = await UserModel.find();
        res.status(200).json({
          status: 'success',
          data: users,
        })
      }
      if (req.method === 'POST') {
        const u = {
          username: req.body.username,
          did: req.body.did
        }
        if (!u.username) {
          return ErrorResponse({
            db, res, statusCode: 400, message: 'No username passed'
          })
        }
        if (!u.did) {
          return ErrorResponse({
            db, res, statusCode: 400, message: 'No DID passed'
          })
        }
        let user = await UserModel.findOne({ did: u.did });
        if (!user) {
          user = await UserModel.create(u);
        } else {
          return ErrorResponse({
            db, res, statusCode: 400, message: 'User already exists'
          })
        }
        res.status(200).json({
          status: 'success',
          data: user,
        })
      }
      if (req.method === 'PATCH') {
        const u = {
          username: req.body.username,
          did: req.body.did
        }
        if (!u.username) {
          return ErrorResponse({
            db, res, statusCode: 400, message: 'No username passed'
          })
        }
        if (!u.did) {
          return ErrorResponse({
            db, res, statusCode: 400, message: 'No DID passed'
          })
        }
        const query = { did: u.did }
        let user = await UserModel.findOne(query);
        if (!user) {
          return ErrorResponse({
            db, res, statusCode: 404, message: 'User does not exist'
          });
        } else {
          user = await UserModel.updateOne(query, { $set: { username: u.username } })
        }
        res.status(200).json({
          status: 'success',
          data: user,
        })
      }
      // db.disconnect();
    } catch (error) {
      console.debug(error)
      if (db instanceof Mongoose) {
        db.disconnect()
      }
      return res.status(500).json({
        status: 'failed',
        message: 'Database connection error'
      })
    }
  } else {
    return res.status(500).json({
      status: 'failed',
      message: 'Database connection URL not found'
    })
  }

}