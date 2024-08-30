import catchAsync from '../../../utils/catchAsync';
import sendResponse from "../../../utils/sendResponse";
import { userservise } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await userservise.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});
const createHR = catchAsync(async (req, res) => {
  const result = await userservise.createHRIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "HR registered successfully",
    data: result,
  });
});
const LoginHR = catchAsync(async (req, res) => {
  const result = await userservise.HRLogin(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "HR Login successfully",
    data: result,
  });
});

const GetUser = catchAsync(async (req, res) => {
  const result = await userservise.GetuserInToDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "USER GET successfully",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  createHR,
  LoginHR,
  GetUser,
};
