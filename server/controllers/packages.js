const Package = require('../models/package');


module.exports.fetchPackages = async (req, res) => {
    const packages = await Package.find({});

    res.json(packages)
}

module.exports.createPackage = async (req, res) => {
    console.log(req.body)
    console.log('hi')
    // const request = new Request({
    //     ...req.body,
    // });
    // console.log(`The Request is ${request}`)
    // try {
    //     await request.save();
    //     console.log(request)
    //     res.status(201).json(request);
    // } catch (error) {
    //     next(error);
    // }
}