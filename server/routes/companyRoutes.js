import express from 'express'
import { changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';
import { changeJobApplicationStatus } from './../controllers/companyController.js';
import upload from './../config/multer.js';
import { protectCompany } from '../middleware/authMiddleware.js';

const router = express.Router();

//register a company
router.post('/register',upload.single('image'), registerCompany)

// login company
router.post('/login',loginCompany)

// get company data
router.get('/company',protectCompany, getCompanyData)

router.post('/post-job',protectCompany, postJob)

router.get('/applicants',protectCompany,getCompanyJobApplicants)

router.get('/list-jobs',protectCompany, getCompanyPostedJobs)

router.post('/change-status',protectCompany, changeJobApplicationStatus)

router.post('/change-visiblity', protectCompany, changeVisiblity)

export default router;