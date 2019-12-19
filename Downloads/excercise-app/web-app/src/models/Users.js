import { api, User } from "./my-get";
import { apifriends } from "./my-get-friends";
import { apiuserexercises } from "./my-get-userexcercises";
import $router from "../router/index";

export const User_Server = {
    async signup(name, username){
        const { user_id } = await api('signupUser', { name, username });
        User.User_Id = user_id;
        $router.push( { name: 'profile' } );
    },
    async login(username){
        const { user_id } = await api('loginUser', {username});
        User.User_Id = user_id;
        console.log(User.User_Id);
        $router.push( { name: 'profile' } );
    },
    Get_Users(){
        return api('');
    },
    Add_Friend(user1, user2){
        return apifriends('add', {user1, user2});
    },
    Delete_Friend(user1, user2){
        return apifriends('delete', {user1, user2});
    },
    Add_Exercise(user, exercise){
        return apiuserexercises('add', {user, exercise});
    },
    Delete_Exercise(user, exercise){
        return apiuserexercises('delete', {user, exercise});
    }

}