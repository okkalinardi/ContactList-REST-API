const contact = require('../models').Contact

class contactController{
    static allData(req, res){
        contact.findAll({order:[['id', 'ASC']]})
        .then(contactData=>{
            res.json(contactData)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static addContact(req, res){
        contact.create({
            name:req.body.name,
            phone:req.body.phone
        })
        .then(addedData=>{
            res.send(addedData)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static deleteContact(req, res){
        contact.destroy({where:{id:req.params.id}})
        .then(success=>{
            res.send('success')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editContact(req, res){
        contact.update({
            name: req.body.name,
            phone: req.body.phone,
            updatedAt: new Date()
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(success=>{
            res.send('success')
        })
        .catch(err=>{
            res.send(err)
        })
    }

}

module.exports = contactController