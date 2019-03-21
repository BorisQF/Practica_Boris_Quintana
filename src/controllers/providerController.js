//Importing the modules and models (providers, specialties).
const _ = require('underscore');
const Provider = require('./../models/providers');
const Specialties = require('./../models/specialties');

const ProviderController = {};

//Get all providers
ProviderController.getProviders = (req, res) => {

    Provider.find({})
        .exec((err, providersDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            if (!providersDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        essage: `Providers not found`
                    }
                });
            }

            res.json({
                ok: true,
                providers: providersDB
            });
        });
}

//Get one provider by ID
ProviderController.getProvider = (req, res) => {

    let _id = req.params.id;

    Provider.findById({ _id })
        .exec((err, providerDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            if (!providerDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: `Provider with ID: ${_id} not found`
                    }
                });
            }

            res.json({
                ok: true,
                provider: providerDB
            });
        });
}

//Create a provider
ProviderController.postProvider = (req, res) => {

    let body = req.body;
    let _id = body.specialty;

    let provider = new Provider({
        firstName: body.firstName,
        lastName: body.lastName,
        middleName: body.middleName,
        email: body.email,
        specialty: null,
        projectedStartDate: new Date(body.projectedStartDate),
        employerId: body.employerId,
        providerType: body.providerType,
        staffStatus: body.staffStatus,
        assignedTo: body.assignedTo,
        status: body.status,
        createBy: body.createBy,
        createAt: new Date()
    });

    Specialties.findById({ _id })
        .exec((err, specialtyDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            if (!specialtyDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: `Specialty with ID: ${_id} not found`
                    }
                });
            }

            provider.specialty = specialtyDB;

            provider.save((err, providerDB) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                if (!providerDB) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: `Provider not found`
                        }
                    });
                }

                res.json({
                    ok: true,
                    provider: providerDB
                });
            });
        });
}

//Update a provider by id.
ProviderController.putProvider = (req, res) => {

    let id = req.params.id;
    let _id = req.body.specialty;

    //filtering and creation of the new body to be updated
    let body = _.pick(req.body, ['firstName', 'lastName', 'middleName', 'email', 'specialty',
        'projectedStartDate', 'employerId', 'providerType', 'staffStatus', 'assignedTo',
        'status', 'createBy', 'updateBy'
    ]);

    Specialties.findById({ _id })
        .exec((err, specialtyDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            if (!specialtyDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: `Specialty with ID: ${_id} not found`
                    }
                });
            }

            body.specialty = specialtyDB;
            body.updateAt = new Date();

            Provider.findByIdAndUpdate(id, body, {
                new: true,
                runValidators: true,
                context: 'query'
            }, (err, providerDB) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                if (!providerDB) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: `Provider with ID: ${id} not found`
                        }
                    });
                }

                res.json({
                    ok: true,
                    provider: providerDB
                });
            });
        });
}

//Delete a provider by id.
ProviderController.deleteProvider = (req, res) => {

    let id = req.params.id;

    Provider.findByIdAndRemove(id, (err, providerDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!providerDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: `Provider with ID: ${id} not found`
                }
            });
        }

        res.json({
            ok: true,
            provider: providerDB
        });
    })
}

//exporting the ProviderController
module.exports = ProviderController;