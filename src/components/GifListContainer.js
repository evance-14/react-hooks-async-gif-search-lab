import React,{useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
    const[gifs,setGifs] = useState([]);
   function fetchGifs(query) {
    fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=zJn781h2WHkJnjsRQiU1grGuX2iX65Pm&rating=g")
    .then((response)=>response.json())
    .then(data =>{
        setGifs(data.data.slice(0,3));
    })
    .catch(error =>console.log(error))
}

return(
    <div>
        <GifSearch onSubmit={fetchGifs} />
        <GifList  gifs={gifs}/>
        
    </div>
);

} 

export default GifListContainer;

