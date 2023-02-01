
type Titles = {
    name: string,
    titles: number
}

const textStyle: React.CSSProperties = {
    width: 100,
    textAlign: "center"
}

export function TitlesWon(props: Titles) {

return <> <h3>NBA Championships Won</h3>
        <table>
            <thead>
                <tr><th>Player</th>
                <th>Championships Won</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td style={textStyle}>{props.name}</td>
                    <td style={textStyle}>{props.titles}</td>
                    </tr> 

            </tbody>
        </table>
    </>

}

