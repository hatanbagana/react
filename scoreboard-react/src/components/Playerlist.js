import { Consumer } from "./context";
import Player from "./Player";
import React from 'react'
import { render } from "@testing-library/react";

export default class Playerlist extends React.Component{

    
    render(){
        return(
            <Consumer>
                {context => {
                    return(
                    <>
                        {context.map((player, i) => (
                            <Player
                              name={player.name}
                              score={player.score}
                              key={player.id}
                              id={player.id}
                              index = {i}
                              removePlayer={this.props.removePlayer}
                              incrementScore = {this.props.incrementScore}
                              dicrementScore = {this.props.dicrementScore}
                              ishighscore = {(this.props.ishighscore() == player.score)}
                            />
                            
                          ))}
                        
                        </>
                    )
                }}
            </Consumer>
        )
    }


}