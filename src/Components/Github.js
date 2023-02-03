import React, { useEffect, useState } from 'react'

const Github = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users")
        setUsers(await response.json())
        // console.log(data)
    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <div className="main-heading"><h1 className='heading'>List Of GitHub Users</h1></div>
            <div className="main-container">
                {
                    users.map((curelement) => {

                        return (
                            <div>
                                <div className='container'>
                                    <div className="image">
                                        <img src={curelement.avatar_url} alt="" className='img' />
                                    </div>
                                    <div className="box">
                                        <div className="user-name">
                                            <h3>{curelement.login}</h3>
                                            <p className='user'>following/other_user </p>
                                        </div>
                                        <div className="followers">
                                            <div className="articles"> <span>Articles</span><span>38</span></div>
                                            <div className="follow"> <span>Followers</span><span>950</span></div>
                                            <div className="rating"> <span>Rating</span><span>8.8</span></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )

                    })

                }
            </div>

        </>
    )
}

export default Github
