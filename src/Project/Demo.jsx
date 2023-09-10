import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactSearchBox from "react-search-box";

const Demo = () => {
  const [user, setUser] = useState();
  const [search, setSearch] = useState();

  const getApi = async () => {
    const baseUrl = "https://api.punkapi.com/v2/beers";
    const res = await axios.get(`${baseUrl}`);
    setUser(res?.data);
  };
  useEffect(() => {
    getApi();
  }, []);
  console.log(user);

  const submit = async () => {
    // const baseUrl ="https://api.punkapi.com/v2/beers";
    const res = await axios.get(`https://api.punkapi.com/v2/beers/${search}`);
    setUser(res?.data);
    console.log("data+++", res.data);
  };

  return (
    <>
      <div className="ss">
        <input
          type="Address"
          className="form-control"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      
        <button type="button" class="btn btn-danger" onClick={submit}>Search</button>
      </div>
      <div class="container">
        <div class="row">
          {user?.map((item) => {
            return (
              <>
              
                <div class="col-sm">
                  <div className="card" style={{ width: "15rem" }}>
                    <img src={item.image_url} className="card-img-top" style={{ width: "100px" }}/>
                    <div className="card-body">
                      <button type="button" class="btn btn-primary">PRODUCT ID: {item.id}</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

              </>
   
  
  );
};

export default Demo;
