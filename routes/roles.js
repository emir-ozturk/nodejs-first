const express = require('express');
const router = express.Router();

const Roles = require('../db/models/roles');
const RolePrivileges = require('../db/models/role_privileges');
const Response = require('../lib/response');
const AppError = require('../lib/app_error');
const HTTP_CODE = require('../lib/http_code');

router.get("/", async (_, res) => {
    try {
        const roles = await Roles.find({});
        res.json(Response.success(roles, "Roles fetched successfully"));
    } catch (error) {
        res.json(Response.error(error.message, error.status));
    }
});

router.post("/", async (req, res) => {
    try {
        const { role_name, is_active } = req.body;
        const role = await Roles.create({ role_name, created_by: req.user?.id, is_active });
        res.json(Response.success(role, "Role created successfully"));
    } catch (error) {
        res.json(Response.error(error.message, error.status));
    }
});

router.put("/", async (req, res) => {
    try {
        let body = req.body;
        if (!body._id) {
            throw new AppError(HTTP_CODE.BAD_REQUEST, "Role ID is required", "Role ID is required");
        }
        const role = await Roles.findByIdAndUpdate(body._id, body, { new: true });
        res.json(Response.success(role, "Role updated successfully"));
    } catch (error) {
        res.json(Response.error(error.message, error.status));
    }
});

router.delete("/", async (req, res) => {
    try {
        let body = req.body;
        if (!body._id) {
            throw new AppError(HTTP_CODE.BAD_REQUEST, "Role ID is required", "Role ID is required");
        }
        const role = await Roles.deleteOne({ _id: body._id });
        res.json(Response.success(role, "Role deleted successfully"));
    } catch (error) {
        res.json(Response.error(error.message, error.status));
    }
});

module.exports = router;