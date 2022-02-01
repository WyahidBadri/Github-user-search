import React, {useContext} from 'react'
import Useritem from './Useritem'
import GithubContext from '../../context/github/GithubContext'

export default function UserResults() {

    const {users, loading} = useContext(GithubContext);

    


    if(!loading) {
        return (
            <div className="grid drid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user ) => (
                    <Useritem key={user.id} user={user}/>
                ))}
            </div>
        )
    } else {
       return <h3>Loading..</h3>
    }

    
}
