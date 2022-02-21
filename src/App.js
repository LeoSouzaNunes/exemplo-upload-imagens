import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const formData = new FormData();
        formData.append("file", data);

        const promise = axios.post("http://localhost:5000/upload", formData);
        promise.then((res) => console.log(res.data));
        promise.catch((error) => console.log(error.response));
    }, [data]);

    return (
        <div className="App">
            <form className="upload">
                <input
                    onChange={(e) => setData(e.target.files[0])}
                    type="file"
                    name="uploadFile"
                    accept="image/*"
                    required
                />
            </form>
        </div>
    );
}

export default App;
