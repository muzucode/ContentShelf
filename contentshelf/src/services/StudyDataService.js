import axios from 'axios'

const uri = 'http://localhost:8090/study'

export default class StudyDataService {

    // Add book to the database
    static addOne(item){
        axios.post(`${uri}/add`, item);
        console.log("Frontend BookDataService Message: The following book has been posted to the server:");
        console.log(item);
    };

        // Get books from the database
    static getAll(){
        // Send axios get request
        return axios.get(`${uri}/getAll`)
        // Then get the response as 'res' variable
        .then(res => {
            console.log('(Frontend BookDataService) The following is response data:');
            console.log(res.data);
            console.log("(Frontend BookDataService) All books in the DB have been retrieved from the server.");
        // Return response data
            return res.data;
        });
        // Return whatever is gotten from the db
    };














    static deleteOne(bookId){
        // 
        axios.delete(`${uri}/deleteOne`, {data: { id: bookId } })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            });
        console.log("Frontend BookDataService Message: Request to delete book with the following ID has been sent:");
        console.log(bookId);
    };







}