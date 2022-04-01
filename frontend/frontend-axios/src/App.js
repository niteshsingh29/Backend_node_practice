import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [state, setState] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000").then((response) => {
      setState(response.data);
    });
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/students", {
        name,
        address,
        rollNo,
      })
      .then((response) => {
        console.log(response.data);
        setState(response.data);
      });
  };

  return (
    <div className="App">
      <div className="container mt-5 text-center">
        Name
        <input
          type="text"
          className="mx-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Address
        <input
          type="text"
          className="mx-2"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        Roll No
        <input
          type="text"
          className="mx-2"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <button className="btn btn-dark mx-2" onClick={handleSubmit}>
          Submit Data
        </button>
      </div>
    </div>
  );
}

export default App;
