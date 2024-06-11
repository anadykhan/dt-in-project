const { getAllCauses, getSingleCause, createCause, updateCause, deleteCause, pushDonator, getCausesForUser } = require("../../models/causes/causes.model")

async function httpGetAllCauses(req, res) {
    const causes = await getAllCauses()
    try {
        return res.status(200).json(causes)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpGetSingleCause(req, res) {
    try {
        const causeID = req.params.id
        const searchedCause = await getSingleCause(causeID)
        return await res.status(200).json(searchedCause)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpCreateCause(req, res) {
    try {
        const savedCause = await createCause(req.body)
        return res.status(201).json(savedCause)
    } catch (err) {
        return res.status(500).json(err)
    }

}

async function httpUpdateCause(req, res) {
    if (!req.body._id) {
        res.status(500).json({ msg: "provide an Cause _id" })
    }
    try {
        const updatedCause = await updateCause(req.body)
        return res.status(200).json(updatedCause)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpDeleteCause(req, res) {
    if (!req.body._id) {
        res.status(500).json({ msg: "provide an Cause _id" })
    }
    try {
        await deleteCause(req.body)
        return res.status(200).json("Cause has been deleted")
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpPushDonator(req, res) {
    try {
        const { causeID, donator } = req.body;

        console.log(causeID, donator)

        if (!causeID || !donator) {
            return res.status(400).json({ msg: "Cause ID and Donator name are required." });
        }
        await pushDonator(causeID, donator);
        return res.status(200).json({ msg: "Donator added successfully." });
    } catch (err) {
        return res.status(500).json(err);
    }
}

async function httpGetCausesForUser(req, res) {
    try {
        const userId = req.params.id;
        const causesForUser = await getCausesForUser(userId);
        return res.status(200).json(causesForUser);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

async function httpGetTopThreeCauses(req, res) {
    const causes = await getAllCauses();
    try {
        causes.sort((a, b) => b.priority - a.priority);

        const topThreeCauses = causes.slice(0, 3);

        return res.status(200).json(topThreeCauses);

    } catch (error) {
        console.error("Error fetching causes:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}



module.exports = {
    httpGetAllCauses,
    httpGetSingleCause,
    httpCreateCause,
    httpUpdateCause,
    httpDeleteCause,
    httpPushDonator,
    httpGetCausesForUser,
    httpGetTopThreeCauses
}