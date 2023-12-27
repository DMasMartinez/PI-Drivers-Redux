import Driver from "./Driver"
const Drivers = (props) => {
    return (
        <div>
            {props.driverlist.map((driver)=>{
                return(
                    <Driver
                        name = {driver.name}
                        surname = {driver.surname}
                        image = {driver.image}
                        description = {driver.description}
                    />
                )
            })}
        </div>
    )

}
        
  

export default Drivers