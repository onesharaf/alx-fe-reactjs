import { useContext } from "react"
import UserContext from "./UserContext"

function UserDetails() {

    const context = useContext(UserContext)
    const {name, email} = context
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>)
}
export default UserDetails