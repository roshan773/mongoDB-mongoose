
const userController = {
    test: (req, res) => {
        res.status(200).json({message: "Test Routes are working properly"})
    }
}

module.exports = userController;