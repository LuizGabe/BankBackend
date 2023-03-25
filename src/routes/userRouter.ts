import { Router } from "express";
import {
  allUsers,
  addNewUser,
  deleteUser,
  historyById,
  alterUser,
  transactionOperations,
  transferOperation
} from "../controller/userController";

const userRoute = Router();

userRoute.get('/all', allUsers)

userRoute.get('/extrato/:id', historyById)

userRoute.post('/add', addNewUser)

userRoute.delete('/:id', deleteUser)

userRoute.put('/:id', alterUser)

userRoute.post('/operations/:id', transactionOperations)

userRoute.post('/transfer', transferOperation)

export default userRoute