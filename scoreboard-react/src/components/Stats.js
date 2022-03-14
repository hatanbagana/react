import React from 'react'

function Stats(props){
return(

    <div className="stats">

        <table>
            <tbody>

            <tr>
                <td>Total Players</td>
                <td>{props.totalPlayer}</td>
            </tr>
            <tr>
                <td>Total Score</td>
                <td>{props.totalScore}</td>
            </tr>

            </tbody>
        </table>
    </div>
    )
}


export default Stats;