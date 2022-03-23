import { Consumer } from "./context";
import Player from "./Player";
import React from 'react'
import { render } from "@testing-library/react";

export default class Playerlist extends React.Component{

    
    render(){
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
                              removePlayer={this.props.removePlayer}
                              incrementScore = {this.props.incrementScore}
                              dicrementScore = {this.props.dicrementScore}
                              ishighscore = {(this.props.ishighscore() == player.score)}
                              changeName = {this.props.changeName}
                            
                            />
                            }
                          )}
                        
                    </>
                    )
                }}
            </Consumer>
        )
    }


}