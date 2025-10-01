module.exports = function(app){
    app.get('/informacao/cursos', function(reg,res){
    res.render("informacao/cursos");
    });
}