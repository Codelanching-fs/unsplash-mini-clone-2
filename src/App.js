import React, { useState, useEffect } from "react";
import Loading from "./Components/Loading.jsx";
import Imgcard from "./Components/Imgcard.jsx";
import "./style.css";
const client_id = "1LRuH9sVhlcqWP36KSxbPlKvoqD_ZmU432jaN4Szr74";
const unsplash_api = `https://api.unsplash.com/photos/?client_id=${client_id}&orientation=portrait&per_page=80`;
const search_api = `https://api.unsplash.com/search/photos/?client_id=${client_id}&per_page=80&query=`;
const App = () => {
  const [apidata, setapidata] = useState([]);
  const [ival, setival] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchingData(unsplash_api);
  }, []);

  const fetchingData = async url => {
    setloading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setapidata(data);
      setloading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchingsearchData = async url => {
    setloading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setapidata(data.results);
      console.log(apidata);
      setloading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const formHandler = e => {
    e.preventDefault();
    if (ival) {
      fetchingsearchData(search_api + ival);
      console.log();
    }
    setival("");
  };
  return (
    <>
      <div className="searchForm">
        <form onSubmit={formHandler}>
          <input
            type="search"
            placeholder="search photo.."
            value={ival}
            onChange={e => {
              setival(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
        {loading ? <Loading /> : null}
      </div>
      <div className="flex_card">
        {apidata.map((dd, index) => {
          return <Imgcard key={index} {...dd} />;
        })}
      </div>
    </>
  );
};
export default App;
