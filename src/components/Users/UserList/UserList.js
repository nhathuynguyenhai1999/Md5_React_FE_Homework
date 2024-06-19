import UserSearch from "../UserSearch/UserSearch";
import {useState} from "react";
import Star from "./Star/Star";

function UserList() {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Luan",
            email: "luan.com",
            dob: "2000-01-01",
            rate: 5
        },
        {
            id: 2,
            name: "Quan",
            email: "quan.com",
            dob: "2000-01-01",
            rate: 3.5
        },
        {
            id: 3,
            name: "Teo",
            email: "teo.com",
            dob: "2000-01-01",
            rate: 1.5
        }
    ]);

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete")) {
            // tao new array with destructing
            const newUsers = [...users];
            //xoa 1 phan tu mang moi
            newUsers.splice(index, 1);
            //set lai gia tri state -> component re-render
            setUsers(newUsers);
        }
    }

    return (
        <>
            <div className="card mt-2">
                <div className="card-header">
                    User List
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Dob</th>
                            <th scope="col">Rate</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user,index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.dob}</td>
                                <td>
                                    <Star name="Luan" totalStar={user.rate}/>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserList;