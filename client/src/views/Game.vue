<template>
<div>
    <h1 class="is-size-1">
        This is the Game Page
    </h1> 

    <div class="columns">
        <div class="column is-one-quarter">
            
            <ul class="panel">
                <p class="panel-heading">
                    Players
                </p>
                <li v-for="(p, i) in game.Players " :key="i" 
                    class="panel-block" :class="{ 'is-active': i == game.Dealer }">
                    <span class="panel-icon">
                    <i class="fas" :class=" i == game.Dealer ? 'fa-user-secret' : 'fa-user' " aria-hidden="true"></i>
                    </span>
                    {{p.name}}
                </li>
            </ul>

            <ul class="panel">
                <p class="panel-heading">
                    My Hand
                </p>
                <li v-for="(c, i) in My_Captions " :key="i" class="panel-block is-active">
                    {{c}}
                </li>
            </ul>

        </div>
        <div class="column">
            <div class="box is-clickable" @click="pictureClicked">
                <img    alt="Current Picture in Play" class="image is-fullwidth"
                        :src="game.Picture_In_Play" v-if="game.Picture_In_Play"  />
                <div class="notification is-primary" v-else>
                    Flip First Picture
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import { Game_Client, Game_Server, My_Captions } from "../models/Game";


export default {
    data: ()=> ({
        game: Game_Client,
        My_Captions
    }),
    created(){
        this.My_Captions = Game_Server.Get_Hand();
    },
    methods: {
        pictureClicked(){
            this.game.Picture_In_Play = Game_Server.Get_Next_Picture();
            this.game.Dealer ++;
        }
    }
}
</script>

<style>
    .is-clickable {
        cursor: pointer;
    }
</style>