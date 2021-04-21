const {Router} = require('express')
const router = Router();

const mysqlConnection = require('../database');


// RUTAS
// RETORNAR TODOS LOS DATOS
// http://localhost:3005
router.get('/' , (req , res)=>{
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});



// RETORNAR SOLO UN DATO
// http://localhost:3005/1
router.get('/:id' , (req , res)=>{
    // req.params.id
    const {id} = req.params;

    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            // res.json(rows);
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    })
});



// GUARDAR
/*
http://localhost:3005
Content-Type application/json
{
    "id" : 0,
    "name" : "Guardar registro",
    "salary": 2000
}
*/
router.post('/' , (req , res)=>{

    // console.log(req.body);

    // const query = `
    //     SET @id = ?;
    //     SET @name = ?;
    //     SET @salary = ?;
    //     CALL employeeAddOrEdit(@id, @name, @salary);
    // `;

    const {id, name, salary} = req.body;

    const query = `CALL employeeAddOrEdit(?, ?, ?);`;

    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if (!err) {
            // res.json(rows);
            res.json({status : 'Guardado'});
        }else{
            console.log(err);
        }
    })

});



// ACTUALIZAR
/*
http://localhost:3005/1
Content-Type application/json
{
    "name" : "Actualizar registro",
    "salary": 2000
}
*/
router.put('/:id' , (req , res)=>{

    const {name, salary} = req.body;
    const {id} = req.params;

    const query = `CALL employeeAddOrEdit(?, ?, ?);`;

    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if (!err) {
            // res.json(rows);
            res.json({status : 'Actualizado'});
        }else{
            console.log(err);
        }
    })

});


// ELIMINAR
// http://localhost:3005/1
router.delete('/:id' , (req , res)=>{

    const {id} = req.params;

    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            // res.json(rows);
            res.json({status : 'Eliminado'});
        }else{
            console.log(err);
        }
    })

})

module.exports = router;