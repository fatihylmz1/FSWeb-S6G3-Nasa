import React, { useEffect, useState } from "react";
import axios from "axios";
import Baslik from "./components/Baslik";
import resimler from "./components/resimler";



function App() {
  const [resim, setResim] = useState(resimler);
  const [info, setInfo] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  useEffect(async () => {
    await axios
      .get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: "HoXMiDXcFiY3Hy5wZvewdMwREAENNmaSpId2YjXR",
          date: date
        },
      })
      .then(function (response) {
        console.log(response);
        setInfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });

    console.log(`Sayfam render oldu`);
  }, [date]);


  return (
    <div className="App">
      <Baslik />;

    </div>

  );
}

export default App;

