import {useState} from "react";

function UserSearch() {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <>
            <h1>User Search</h1>
            Keyword: {keyword}
            <br/>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default UserSearch;