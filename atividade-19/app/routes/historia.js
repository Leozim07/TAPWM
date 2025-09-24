module.exports = function(app){
    app.get('/informacao/historia', function(rea,res){
    res.render("informacao/historia");
    });
}