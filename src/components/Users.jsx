import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Users = () => {
    const loadedUsers = useLoaderData();
    const[users, setUsers] = useState(loadedUsers);

    const handleDelete = id =>{
    //make sure user is confirmed to delete
    fetch(`https://coffee-store-server-dfyzx13q5-shajalals-projects.vercel.app/user/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
            toast.success('deleted successfully');
            //remove the user from the UI
            const remainigUsers = users.filter(user =>user._id !== id);
            setUsers(remainigUsers);

        }
    })
    }

    return (
        <div>
            <h2>Users has craeted: {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>CreatedAt</th>
                        <th>LAST LOGGEDIN</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(user =><tr key={user._id}>
                            <th>1</th>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastLoggedAt}</td>
                            <td>
                                <button 
                                onClick={() => handleDelete(user._id)}
                                className="btn">X</button>
                                <ToastContainer/>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;