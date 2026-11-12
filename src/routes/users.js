import { Router } from "express"
import * as users from '../services/user.service.js'

const router = Router();

router.use(express.json());

router.get('/', async(req, res, next) => {
    try {
        res.json(await users.getUsers());
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        res.json(await users.getUserById(req.params.id));
    } catch (e) {
        next(e);
    }
})

router.post('/', async(req, res, next) => {
    try {
        await users.createUser(JSON.stringify(req.body))
        res.json({ success: true, data: req.body });
    } catch (e) {
        next(e);
    }
})

router.put('/:id', async(req, res, next) => {
    try {
        await users.updateUser(req.params.id, JSON.stringify(req.body))
    } catch (e) {
        next(e)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        await users.deleteUser(req.params.id)
    } catch (e) {
        next(e)
    }
})