import "./my-styles.css"

export function HonorableMentions() {
    const mentions: string[] = ["Charles Barkley", "Reggie Miller", "Clyde Drexler", "Gary Payton", "Karl Malone"];

    return <> <h3>Honorable Mentions</h3>
    
    <ol>
        {mentions.map(m => <li>{m}</li>)}
    </ol>

    </>


}