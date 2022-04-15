import { Consumer } from "./context";
import Player from "./Player";
import React from 'react'
import { render } from "@testing-library/react";

export default function Playerlist(props){

    

        return(
            <Consumer>
                {(context,actions) => {
                    return(
                    <>
                        {context.map((player, i) => {

                            
                            return <Player
                              {...player}
                              key={player.id}
                              index = {i}
                              removePlayer={props.removePlayer}
                              incrementScore = {props.incrementScore}
                              dicrementScore = {props.dicrementScore}
                              ishighscore = {(props.ishighscore() == player.score)}
                              changeName = {props.changeName}
                            
                            />
                            }
                          )}
                        
                    </>
                    )
                }}
            </Consumer>
        )
    


}