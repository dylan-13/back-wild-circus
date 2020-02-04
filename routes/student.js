var models  = require('../models');

    module.exports = app => {
    //get student by id
    app.get('/students/:id', (req, res) => {
        models
        .student
        .findByPk(req.params.id)
        .then(x => res.json(x))
    })

    // get all students
    app.get('/students', (req,res)=>{
        models
        .student
        .findAll()
        .then(x=>res.json(x))
    })

     //création student
    app.post('/students', (req, res) => {
        models
        .student
        .create(req.body)
        .then(x => res.json(x))
    });
    

    //modif student
    app.put('/students/:id', (req, res) =>
        models
        .student
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.end())
    );
    
    //Delete student
    app.delete('/students/:id', (req, res) => {
        models
        .student
        .destroy({
            where: {
                id: req.params.id
            }
        }).then(() => console.log("Deleted") & res.end())
    });
}