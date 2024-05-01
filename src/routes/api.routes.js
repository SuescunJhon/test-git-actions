import { Router } from "express";
import * as apiCtrl from "../middlewares/api.controller.js";

const router = Router()

router.get('/', apiCtrl.getInformation)

export default router