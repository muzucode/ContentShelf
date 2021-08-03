import axios from 'axios'

const uri = 'http://localhost:8090/study'

export default class StudyDataService {

  static addOne(item){
      axios.post(`${uri}/add`, item);
      console.log("Frontend StudyDataService Message: The following study has been posted to the server:");
      console.log(item);
  };

  static getAll(){
      // Send axios get request
      return axios.get(`${uri}/getAll`)
      // Then get the response as 'res' variable
      .then(res => {
          console.log('(Frontend StudyDataService) The following is response data:');
          console.log(res.data);
          console.log("(Frontend StudyDataService) All studies in the DB have been retrieved from the server.");
      // Return response data
          return res.data;
      });
      // Return whatever is gotten from the db
  };

  static deleteOne(studyId){
      // 
      axios.delete(`${uri}/deleteOne`, {data: { id: studyId } })
          .then(res => {
              console.log(res);
          })
          .catch(err => {
              console.error(err);
          });
      console.log("Frontend StudyDataService Message: Request to delete study with the following ID has been sent:");
      console.log(studyId);
  };







}