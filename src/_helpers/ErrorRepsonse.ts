import { Mongoose } from "mongoose";
import { NextApiResponse } from "next";

export const ErrorResponse = (params: {
  db: Mongoose;
  res: NextApiResponse;
  statusCode: number;
  message: string
}) => {
  params.res.status(params.statusCode).json({
    status: 'failed',
    message: params.message
  })
  params.db.disconnect();
}