import { Router } from "express"
import * as users from '../services/user.service.js'

const router = Router();

router.get('/', async(req, res, next) => {
    try {
        res.json(await users.getUsers());
    } catch (e) {
        next(e);
    }
});

