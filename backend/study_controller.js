import Study from './study_model.js';

export default class StudyController {

  static addOne(content){
      // Create new document
      const study = new Study(content);

      // Save the document to MongoDB, return error if there is one
      study.save(function (err, study) {
          if (err) return console.error(err);
          console.log("Study resource has been added to DB!")
        });
  };


  static async getAll(){
      const query = await Study.find({});
      // console.log('Query: getAll');
      // console.log('Query Results:');
      // console.log(query);
      return query;
  };

  static deleteOne(studyId){
    Study.deleteOne({_id: studyId})
        .then(res => {
            console.log(`Study with following ID is deleted`)
            console.log(studyId)
            console.log(res);
        })
        .catch(err =>{
            console.error(err)
        })
};
}