const admins = require('./admins.mongo')

async function getAllAdmins() {
    return await admins
        .find({})
        .sort({ createdAt: -1 })
}

async function getSingleAdmin(adminID) {
    return await admins
        .findById(adminID)
}

async function createAdmin(admin) {
    const newAdmin = new admins(admin)
    await newAdmin.save()
}

async function updateAdmin(admin) {
    await admins
        .findByIdAndUpdate(
            admin._id,
            {
                $set: admin,
            },
            {
                new: true,
            }
        )
}

async function deleteAdmin(admin) {
    await admins
        .findByIdAndDelete(
            admin._id
        )
}

module.exports = {
    getAllAdmins,
    getSingleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
}