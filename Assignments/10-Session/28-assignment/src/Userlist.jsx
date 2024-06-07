function Userlist({ users }) {
    return (
        <>
            <h2 className=' mt-5 text-center'>User List</h2>

            <div className='m-4'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Date Of Birth</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.username}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Userlist;