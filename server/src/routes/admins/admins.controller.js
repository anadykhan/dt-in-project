const { getAllAdmins, getSingleAdmin, createAdmin, updateAdmin, deleteAdmin } = require("../../models/admins/admins.model")

async function httpGetAllAdmins(req, res) {
    const admins = await getAllAdmins()
    try {
        return res.status(200).json(admins)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpGetSingleAdmin(req, res) {
    try {
        const adminID = req.params.id
        const searchedAdmin = await getSingleAdmin(adminID)
        return await res.status(200).json(searchedAdmin)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpCreateAdmin(req, res) {
    try {
        const savedAdmin = await createAdmin(req.body)
        return res.status(201).json(savedAdmin)
    } catch (err) {
        return res.status(500).json(err)
    }

}

async function httpUpdateAdmin(req, res) {
    if (!req.body._id) {
        res.status(500).json({ msg: "provide an Admin _id" })
    }
    try {
        const updatedAdmin = await updateAdmin(req.body)
        return res.status(200).json(updatedAdmin)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpDeleteAdmin(req, res) {
    if (!req.body._id) {
        res.status(500).json({ msg: "provide an Admin _id" })
    }
    try {
        await deleteAdmin(req.body)
        return res.status(200).json("Admin has been deleted")
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports = {
    httpGetAllAdmins,
    httpGetSingleAdmin,
    httpCreateAdmin,
    httpUpdateAdmin,
    httpDeleteAdmin
}