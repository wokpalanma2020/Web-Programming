import { api, User } from "./my-get-exercises";
import { Exercise } from "./my-get-exercises";
import $router from "../router/index";

export const Exercise_Server = {
    Get_Exercises(){
        return api('');
    },
    async Get_One_Exercise(title){
        const { e } = await api(title);    
        Exercise.Exercise = e;
        $router.push( { name: 'exercise' } );
    }
}