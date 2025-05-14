import { Router } from "express";
import {sendmail} from "../controller/controller_mail.js"

const router = Router()

router.post("/sendmail", sendmail)

export default router