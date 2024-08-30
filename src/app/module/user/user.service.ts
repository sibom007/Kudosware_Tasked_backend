import bcrypt from "bcrypt";

import prisma from "../../../utils/prisma";

import { HR, User } from "@prisma/client";

const createUserIntoDB = async (payload: User) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });
  if (isUserExist) {
    throw new Error("Data already exist");
  }

  const result = await prisma.user.create({
    data: payload,
  });

  return result;
};
const createHRIntoDB = async (payload: HR) => {
  const { email, hashpassword } = payload;
  const hashedPassword = await bcrypt.hash(hashpassword, 12);
  const result = await prisma.hR.create({
    data: {
      email,
      hashpassword: hashedPassword,
    },
  });
  return result;
};

const HRLogin = async (payload: HR) => {
  const { email, hashpassword } = payload;
  const isUserExist = await prisma.hR.findUnique({
    where: {
      email,
    },
  });
  if (!isUserExist) {
    throw new Error("User does not exist");
  }
  const isPasswordMatched = await bcrypt.compare(
    hashpassword,
    isUserExist.hashpassword
  );
  if (!isPasswordMatched) {
    throw new Error("Password is incorrect");
  }
  const { hashpassword: _, ...others } = isUserExist;

  return others;
};

const GetuserInToDB = async () => {
  const result = await prisma.user.findMany();
  return result;
};

export const userservise = {
  createUserIntoDB,
  createHRIntoDB,
  HRLogin,
  GetuserInToDB,
};
