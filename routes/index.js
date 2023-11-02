const router = require('express').Router();
// Routes
const CourseRoutes = require('./courseRoutes');
const SectionRoutes = require('./sectionRoutes');
const ExerciseRoutes = require('./exerciseRoutes');
const AuthRoutes = require('./authRoutes');
const SignupRoutes = require('./signupRoutes');
const ApplicationRoutes = require('./applicationRoutes');
const MailRoutes = require('./mailRoutes');
const UserRoutes = require('./userRoutes');
const requireLogin = require('../middlewares/requireLogin');
const TestRoutes = require('../routes/testRoutes');
const CredentialsRoutes = require('./credentialsRoutes.js');
const ContentCreatorRoutes = require('../routes/contentCreatorRoutes');
const BucketRoutes = require('./bucketRoutesGCP');
const LectureRoutes = require('./lectureRoutes');
const UtilityRoutes = require('../routes/utilityRoutes');

// Print all routes defined in app
router.get('/api', (req, res) => {
    res.send(router.stack)
})

router.use('/api/courses', CourseRoutes);
router.use('/api/exercises', ExerciseRoutes)
router.use('/api/sections', SectionRoutes);
router.use('/api/exercises', ExerciseRoutes);
router.use('/api/auth', AuthRoutes);
router.use('/api/signup', SignupRoutes);
router.use('/api/credentials', CredentialsRoutes);
router.use('/api/applications', ApplicationRoutes);
router.use('/api/mail', MailRoutes);
router.use('/api/users', UserRoutes);
router.use('/api/creators', ContentCreatorRoutes);
router.use('/api/bucket', BucketRoutes);
router.use('/api/lectures', LectureRoutes);
router.use('/api/utility', UtilityRoutes);

// Test route
router.use('/api/test', TestRoutes);


module.exports = router;
