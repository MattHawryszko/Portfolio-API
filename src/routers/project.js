const express = require('express')
const Projects = require('../models/projects')
const router = new express.Router()


router.post('/api/projects', async (req, res) => {
    try {
        const projects = new Projects(req.body)
        await projects.save()
        res.send(projects)
    } catch (e) {
        console.log(e)
        res.status(400).send()
    }
})
router.get('/api/projects', async (req, res) => {
    try {
        const projects = await Projects.find({})
        
        res.send(projects)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

module.exports = router