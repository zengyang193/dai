import express from 'express';

let router = express.Router();
router.get('/', function (req, res, next) {
  res.render('page/index', {});
});

router.get('/settings', function (req, res, next) {
  res.render('page/index', {});
});

export default router;
