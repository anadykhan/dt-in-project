async function httpGetCurrentUser (req, res) {
    try{
        //return res.status(200).json(req.user)
        console.log(req.user)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = httpGetCurrentUser