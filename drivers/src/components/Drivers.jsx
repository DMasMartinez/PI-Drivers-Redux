import Driver from "./Driver"
const Drivers = (props) => {
    return (
        <div>
            {props.driverlist.map((driver)=>{
                return(
                    <Driver
                        name = {driver.forename.name}
                        surname = {driver.forename.surname}
                        image = {driver.image.url}
                        description = {driver.description}
                    />
                )
            })}
        </div>
    )

}
        
  

export default Drivers