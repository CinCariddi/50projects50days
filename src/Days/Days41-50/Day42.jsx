import { useEffect, useRef, useState } from "react";
import "./Style/Day42.css";

export default function Day42() {
    const [users, setUsers] = useState([]);
    const [userClass, setUserClass] = useState([]);
    const listItemsRef = useRef([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function getData() {
        const res = await fetch("https://randomuser.me/api?results=50");
        const { results } = await res.json();
        setUsers(results);
        }
        getData();
        setUserClass([true]);
    }, []);

    function filterData(newString) {
        setSearchTerm(newString);
    }

    useEffect(() => {
        for (let i = 0; i < users.length; i++) {
            if (
                users[i].name.first.toLowerCase().includes(searchTerm) ||
                users[i].name.last.toLowerCase().includes(searchTerm)
            ) {
                const oldData = userClass;
                oldData[i] = true;
                setUserClass(oldData);
            } else {
                const oldData = userClass;
                oldData[i] = false;
                setUserClass(oldData);
            }
        }
    }, [searchTerm]);

    return (
        <div className="contenedorDia42">
            <div className="containerDay42">
                <header className="header">
                    <h4 className="title">Live User Filter</h4>
                    <small className="subtitle">Search by name and/or location</small>
                    <input
                        type="text"
                        id="filter"
                        placeholder="Search"
                        onChange={(e) => filterData(e.target.value)}
                    />
                </header>
                <ul id="result" className="user-list">
                    {users.map((user, i) => (
                        <li
                        key={user.login.uuid}
                        ref={(el) => listItemsRef.current.push(el)}
                        className={userClass[i] === false ? "hide" : ""}
                        >
                            <img src={user.picture.large} alt={user.name.first} />
                            <div className="user-info">
                                <h4>
                                {user.name.first} {user.name.last}
                                </h4>
                                <p>
                                {user.location.city}, {user.location.country}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}