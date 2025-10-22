//let dbConnection = require('../config/DbConnection');
module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql');
 
       const sqlConfig = {
           user: 'BD2313018', //7 últimos dígitos do seu RA
           password: 'Teste1234',
           database: 'BD', 
           server: 'APOLO',
           options: {
               encrypt: false,
               trustServerCertificate: true,
           }
       }
  
// 
      async function getProfessores() {
          try {
                let connection = app.config.dbConnection;
                const pool = await connection();
                const results = await pool.request().query('SELECT * from PROFESSORES')
          
              // res.json(results.recordset);
 
              res.render('informacao/professores',{profs: results.recordset})
    
           } catch (err) {
               console.log(err)
          }
       }
      getProfessores();
   });
}