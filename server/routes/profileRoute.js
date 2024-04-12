import express from 'express';
import { createProfile, deleteProfileDetailsById, getAllProfileDetails, getOneProfileDetail, updateProfileDetailsById } from '../controller/profileController.js';

const router = express.Router();

router.post('/createProfile', createProfile);

router.get('/getallProfile', getAllProfileDetails);
router.get('/getOneProfile/:id', getOneProfileDetail);
router.put('/updateProfileDetails/:id', updateProfileDetailsById);
router.delete('/Profiledelete/:id', deleteProfileDetailsById);


export default router;