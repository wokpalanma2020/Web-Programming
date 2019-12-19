const { CustomError } = require('../models/CustomError');

module.exports.Exercises = {
    availableExcercises: [
        {title: "Pushups", type: "Calisthenics", time:"5-10 Minutes", link:"https://www.youtube.com/watch?v=NECcLiefy0M"}, 
        {title: "Crunches", type: "Calisthenics", time:"20 Minutes", link:"https://www.youtube.com/watch?v=8P5Vn9qPV0Y"}, 
        {title: "Burpees", type:"Calisthenics", time:"20 Minutes", link:"https://www.youtube.com/watch?v=IYlT3GN9JOw"}, 
        {title: "Deadlifts", type: "Weights", time:"10 Minutes", link:"https://www.youtube.com/watch?v=-4qRntuXBSc"}, 
        {title: "Bicycle Kicks", type: "Muscle Training", time:"10 Minutes", link:"https://www.youtube.com/watch?v=9FGilxCbdz8"},
        {title: "Sprints", type: "Cardio", time:"10 Minutes", link:"https://www.youtube.com/watch?v=AvqZvnFr630"},
        {title: "Planks", type:"Calisthenics", time:"8 Minutes", link:"https://www.youtube.com/watch?v=pvIjsG5Svck"},
        {title: "Long Distance Run", type: "Cardio", time:"30-60 Minutes", link:"https://www.youtube.com/watch?v=wCVSv7UxB2E"},
        {title: "Bench Press", type: "Weights", time:"5-10 Minutes", link:"https://www.youtube.com/watch?v=gRVjAtPip0Y"}
    ],
    Get_Excercises(){
        return {
            Exercises: this.availableExcercises
        };
    },
    Get_One_Exercise(title){
        e = this.availableExcercises.find(x => x.title == title);
        if(e){
            return e;
        }
        throw new CustomError(404, "Exercise not found.");
    }
};
