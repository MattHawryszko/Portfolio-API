const mongoose = require('mongoose')



let projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image_url: {
        type: String,
        required: true,
        trim: true
    },
    live_demo: {
        type: String,
        required: true,
        trim: true
    },
    github: {
        type: String,
        required: true,
        trim: true
    },
    buildTools:{
        type: Array
    }


});

const Projects = mongoose.model('Projects', projectsSchema);
module.exports = Projects;
