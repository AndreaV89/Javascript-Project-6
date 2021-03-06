const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
    res.locals.projects = projects;
    res.render('index', res.locals.projects);
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
    const { id } = req.params;
    res.locals.project = projects[id];
    res.render('project');
})

module.exports = router;