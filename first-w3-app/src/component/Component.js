
function Car(props) {
    return (
        <>
            <h1>This is my car and Its {props.color}</h1>
        </>
    )
}



function Brand(){
    return(
        <>
        <h1>I have a Car.</h1>
        <Car color="red"></Car>
        </>
    )
}

export default Brand;


