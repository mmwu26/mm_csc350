import "./App.css";
import { useState } from "react";
import ListData from "./components/ListData";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="container mt-5" style={{ maxWidth: "800px" }}>
        <div className="container mt-5">
          <h2 className="text-center text-white">Search for an Animal</h2>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control mx-auto"
            style={{ maxWidth: "400px" }}
          />
        </div>

        <div className="container mt-5">
          <table className="table table-dark">
            <thead>
              <tr>
                <th className="text-start">Image</th>
                <th className="text-start">Name</th>
                <th className="text-start">Animal</th>
                <th className="text-end">Specialty</th>
              </tr>
            </thead>
            <tbody>
              <ListData value={search} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
