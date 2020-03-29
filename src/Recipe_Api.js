import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const Recipe_Api = () => {
   const App_id = "5a4d6ece";
   const App_key = "1866a0713d196714c7a706a05edd4a10";
   const [counter, setcounter] = useState([]);
   const [search, setSearch] = useState("");
   const [query, setQuery] = useState("chicken");

   useEffect(() => {
      console.log("useEffect called");
      getRecipes();
   }, [query]);

   const getRecipes = async () => {
      const response = await fetch(
         `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`
      );
      const data = await response.json();
      console.log(data.hits);
      setcounter(data.hits);
   };

   const updateSearch = e => {
      setSearch(e.target.value);
   };

   const getsearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
   };
   return (
      <div className="container">
         <form className="form" onSubmit={getsearch}>
            <input
            placeholder="search recipe"
               className="search-input"
               type="text"
               name="search"
               value={search}
               onChange={updateSearch}
            ></input>
            <button className="submit" type="submit">
               Search
            </button>
         </form>
         <div className="row">
            <div className="col-md-12">
               <div className="Card">
                  {counter.map((item, pos) => {
                     return (
                        <Recipe
                           title={item.recipe.label}
                           image={item.recipe.image}
                           cal={item.recipe.calories}
                           ingrid={item.recipe.ingredients}
                           key={pos}
                        />
                     );
                     // console.log(item)
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};
export default Recipe_Api;
