const express = require('express');
const router = express.Router();
const postmodel = require('../../models/posts/post_model')
router.post('', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }
    let model = new postmodel(req.body)
    console.log(req.body)
    model.stars=0
    model.stared=false
    model.bucket=false
    model.save()
        .then(doc => {
            console.log(model.createdAt)
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.get('', (req, res) => {
    console.log("get req")
    postmodel.find({})
        .then(doc => {
            // console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.get('/:id', (req, res) => {
    console.log("get request for id " + req.params.id)
    postmodel.find({
            _id: req.params.id
        })
        .then(doc => {
            // console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
module.exports = router;