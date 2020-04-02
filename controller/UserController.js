const User = require('../database/Models/User')

module.exports = {

    async create(req, res) {

        let data = req.body

        const newUser = new User({
            email: data.email,
            password: data.password,
            address: data.address,
            address2: data.address2,
            district: data.district,
            city: data.city,
            uf: data.uf,
            cep: data.cep,
            sympthoms: [],
            groups: [],
            result: false

        })

        await newUser.save()
            .then(result => {
                console.log(result)
                res.json(result._id)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send('Falha no registro!')
            })

    },

    async update(req, res) {

        let data = req.body
        let headers = req.headers

        console.log(data)
        console.log(headers.id)

        await User.findByIdAndUpdate(headers.id, {
                email: data.email,
                password: data.password
            })
            .exec(function (err, response) {
                if (err) return res.status(500).send(err);
                res.status(200).send(response)
            })

    },

    async updateSymptoms(req, res) {

        let data = req.body
        let headers = req.headers
        let nSymptoms = data.symptoms

        console.log(data)
        console.log(headers.id)

        await User.findByIdAndUpdate(headers.id, {
                symptoms: data.symptoms,
            })
            .exec(function (err, response) {
                if (err) return res.status(500).send(err);
                console.log(response)
            })
        
        nSymptoms.length >= 4 ? 

            await User.findByIdAndUpdate(headers.id, {
                result: true,
            })
            .exec(function (err, response) {
                if (err) return res.status(500).send(err);
                res.status(200).send('Atualizado sintomas')
            }) 
            
            : 
            
            await User.findByIdAndUpdate(headers.id, {
                result: false,
            })
            .exec(function (err, response) {
                if (err) return res.status(500).send(err);
                res.status(200).send('Atualizado sintomas')
            })    

    },

    async updateGroups(req, res) {

        let data = req.body
        let headers = req.headers

        console.log(data)
        console.log(headers.id)

        await User.findByIdAndUpdate(headers.id, {
                groups: data.groups,
            })
            .exec(function (err, response) {
                if (err) return res.status(500).send(err);
                res.status(200).send(response)
            })

    },

    async getCases(req, res) {

        const id = req.params.id

        console.log(id)

        const user = await User.findById(id)

        console.log(user)

        const uf = await User.countDocuments({
            uf: user.uf,
            result: true

        }, (err, count) => {
            console.log('numero de ocrs: ', count)
        })

        const city = await User.countDocuments({
            uf: user.uf,
            city: user.city,
            result: true

        }, (err, count) => {
            console.log('numero de ocrs: ', count)
        })

        const district = await User.countDocuments({
            uf: user.uf,
            city: user.city,
            district: user.district,
            result: true

        }, (err, count) => {
            console.log('numero de ocrs: ', count)
        })

        const address = await User.countDocuments({
            uf: user.uf,
            city: user.city,
            district: user.district,
            address: user.address,
            result: true

        }, (err, count) => {
            console.log('numero de ocrs: ', count)
        })

        const responseN = {
            Nuf: uf,
            Ncity: city,
            Ndistrict: district,
            Naddress: address
        }

        const response = {
            uf: user.uf,
            city: user.city,
            district: user.district,
            address: user.address
        }

        try {
            res.status(200).json([response, responseN])
        } catch (error) {
            res.status(500).json(error)
        }

    },
}