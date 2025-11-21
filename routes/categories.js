const express = require('express');
const router = express.Router();

const Categories = require('../db/models/categories');
const Response = require('../lib/response');
const AppError = require('../lib/app_error');
const HTTP_CODE = require('../lib/http_code');

router.get("/", async (req, res, next) => {
    try {
        const categories = await Categories.find({});
        res.json(Response.success(categories, "Categories fetched successfully"));
    } catch (error) {
        res.json(Response.error(error.message, error.status));
    }
});

router.post("/add", async (req, res) => {
    let body = req.body;

    try {
        if (!body.name) {
            throw new AppError(HTTP_CODE.BAD_REQUEST, "Name is required", "Name is required");
        }

        const category = await Categories.create(req.body);
        category.save();
        res.json(Response.success(category, "Category added successfully", HTTP_CODE.CREATED));
    } catch (error) {
        res.json(Response.error(error.message, error.status));
    }
});

router.put("/update", async (req, res) => {
    let body = req.body;

    try {
        if (!body._id) {
            throw new AppError(HTTP_CODE.BAD_REQUEST, "Category ID is required", "Category ID is required");
        }

        const category = await Categories.updateOne({ _id: body._id }, body);
        res.json(Response.success(category, "Category updated successfully", HTTP_CODE.OK));
    } catch (error) {
        res.json(Response.error(error.message, error.status));
    }
});

router.delete("/delete", async (req, res) => {
    let body = req.body;

    try {
        if (!body._id) {
            throw new AppError(HTTP_CODE.BAD_REQUEST, "Category ID is required", "Category ID is required");
        }

        const category = await Categories.deleteOne({ _id: body._id });
        res.json(Response.success(category, "Category deleted successfully", HTTP_CODE.OK));
    } catch (error) {
        res.json(Response.error(error.message, error.status));
    }
});

module.exports = router;