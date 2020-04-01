const User = require('../database/Models/User')

module.exports = {
    async create(req, res, next) {
        
        let data = req.body

        const newUser = new User({
            email: data.email,
            password: data.password,
            address: data.address,
            address2: data.address2,
            district: data.district,
            city: data.city,
            uf: data.uf,
            cep: data.cep
        })

        await newUser.save()
            .then(result => {
                console.log(result)
                res.json('Usuário criado')
            })
            .catch(err => {
                console.log(err)
                res.status(500).send('Falha no registro!')
            })

    }
}