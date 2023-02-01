
type Goat = {
    fullName: string,
    rings: number

}

export function TheGoat(props: Goat) {
    let {fullName, rings} = props; 

    return <> 
        
        {rings >= 6 ? <>
        <h1>The GOAT:</h1><h2>{fullName}</h2>
        </>: <h2>Nobody does it like MJ!</h2> }
    
     </>
}
