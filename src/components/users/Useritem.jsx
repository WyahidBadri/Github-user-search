import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Useritem({user: {login, avatar_url}}) {

    return (
        <div className="card shadow-md compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow width-14 height-14">
                            <img src={avatar_url} alt="profile"/>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="card-title">
                        {login}
                    </h2>
                    <Link className="text-base-content text-opacity-40" to={`/users/${login}`}>
                        Visit Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

Useritem.propTypes = {
    user: PropTypes.object.isRequired
}
