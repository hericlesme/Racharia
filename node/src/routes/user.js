module.exports = (application) =>{
    application.get('/', (req, res) => {
        console.log(application);
    });
}