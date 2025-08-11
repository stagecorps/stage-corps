import { Request, Response, Router } from "express";
import assets from '../db/assets.json'

const router = Router();

router.get('/assets', (req: Request, res: Response) => {
    try {
        res.json(assets)
    } catch (error: any) {
        res.status(500).send({ message: error?.message })
    }
    
});

router.get('/test', (req: Request, res: Response)=>{
    try {
        res.send("This is a test")
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
})

export default router;