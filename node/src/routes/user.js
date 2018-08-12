export default (application) =>{
    application.get('/', (req, res) => {
        console.log(application);
    });
}