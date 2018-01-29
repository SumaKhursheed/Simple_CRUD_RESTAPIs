var express = require('express');
var router = express.Router();

var Employee = require('../models/employee');

// localhost:3000/employee/
router.get('/', function (req, res) {
    Employee.find()
        .exec(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
            success: 1,
            message: 'Saved data',
            obj: result
        });
        });
});

router.post('/', function (req, res) {
    var employee = new Employee({
        name : req.body.name,
        age : req.body.age,
        married: req.body.married
    });
    employee.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved data',
            obj: result
        });
    });
});

router.delete('/:id', function(req, res) {
    Employee.findById(req.params.id, function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!result) {
            return res.status(500).json({
                title: 'No id Found!',
                error: {message: 'id not found'}
            });
        }
        result.remove(function(err, result2) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted user',
                obj: result2
            });
        });
    });
});

router.patch('/:id', function (req, res) {
    Employee.findById(req.params.id, function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!result) {
            return res.status(500).json({
                title: 'No user Found!',
                error: {message: 'User not found'}
            });
        }
        result.name = req.body.name;
        result.age = req.body.age;
        result.married = req.body.married;
        result.save(function(err, result2) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result2
            });
        });
    });
});
module.exports = router;