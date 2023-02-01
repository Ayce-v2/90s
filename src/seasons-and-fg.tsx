import { ClientRequest } from "http"

type SeasonFG = {
    player: string,
    seasons: number,
    fieldGoal: number

}

const textStyle: React.CSSProperties = {
    width: 100,
    textAlign: "center"
}

export function SeasonsAndFg(props: SeasonFG) {


return <> <h3>Seasons Played & Field Goal Percentage</h3>
        <table>
            <thead>
                <tr><th>Player</th>
                <th>Seasons Played</th>
                <th>FG %</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={textStyle}>{props.player}</td>
                    <td style={textStyle}>{props.seasons}</td>
                    <td style={textStyle}>{props.fieldGoal}</td>
                    </tr>
                
            </tbody>
        </table>
    
    </>
}

