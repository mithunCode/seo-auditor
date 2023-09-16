import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

const Search = () => {
  let mainRes;
  const [res, setRes] = useState([]);
  const [load, setLoad] = useState(false);

  let url;
  const handleClick = (e) => {
    e.preventDefault();
    url = document.getElementById("urlInput").value;
    mainRes = checkSeo(url);
    setLoad((prev) => !prev);
  };
  const checkSeo = (url) => {
    const post_array = [];
    post_array.push({
      url: url,
      enable_javascript: true,
      custom_js: "meta = {}; meta.url = document.URL; meta;",
    });

    axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/instant_pages",
      auth: {
        username: "mithunnaikwork@gmail.com",
        password: import.meta.env.VITE_SOME_KEY,
      },
      data: post_array,
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (response) {
        var result = response["data"]["tasks"];
        // Result data
        mainRes = result[0].result[0].items;

        setRes(mainRes);
        setLoad(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h3 className="text-white font-palanquin text-center p-3">
        Enter the full url including https:// or http://
      </h3>
      <form className="relative flex justify-center items-center gap-5 max-sm:flex-col">
        <br />
        <input
          type="text"
          placeholder="Enter a url "
          required=""
          className="bg-white p-3 mt-6 rounded-full w-96 max-sm:w-72 max-sm:mt-10"
          id="urlInput"
        />
        <button
          type="submit"
          onClick={handleClick}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded max-sm:mt-2"
        >
          Generate
        </button>
      </form>

      <div className="text-white" id="loading">
        {load ? (
          <div className="flex justify-center mt-10 items-center">
            <Loader type="spin" color="orange" />
          </div>
        ) : (
          <Card result={res} className="text-white" />
        )}
      </div>
    </>
  );
};

export default Search;
