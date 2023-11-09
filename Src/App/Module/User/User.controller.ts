/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Request } from "express";
import UserServeice from "./User.serveice";
import { Users } from "./User.Model";

const createUsers = async (req: Request, res: Response) => {
  try {
    const { ...user } = req.body;
    const result = await UserServeice.createUser(user);
    res.status(200).json({
      success: true,
      message: "Successfully Created User",
      data: result
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "filed to create User",
      errorMessage: error.message
    })
  }
};


const getAllUsers = async (req: Request, res: Response)=>{
  try{
    const totalCount= await Users.countDocuments()
    const result = await Users.find({});
    res.status(200).json({
      success: true,
      message: "Retrived All Users",
      totalCount: totalCount,
      data: result
    })
  }catch(error: any){
    res.status(400).json({
      success: false,
      message: "Filed to Retrived all User",
      errorMessage: error.message
    })
  }
}


const getSingleUsers =async (req:Request, res: Response) => {
  try{
    const {id} = req.params
  const result = await Users.findById(id);
  res.status(200).json({
    success: true,
    message: "Retrived One Users",
    data: result,
  })
  }catch(error:any){
    res.status(400).json({
      success: false,
      message: "Filed To Retrived single User",
      errorMessage: error.message
    })
  }
}

export default {
  createUsers,
  getAllUsers,
  getSingleUsers
}