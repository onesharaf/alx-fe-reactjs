import { useContext } from "react"
import UserContext from "./UserContext"

const UserProfile = () => {
    
    const context = useContext(UserContext)
    const {name, age, bio} = context
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}

export default UserProfile