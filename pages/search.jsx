import { useState , useRef } from "react";

const recipeQuery = `*[_type == 'movies' && slug.current == $slug][0]{
  title,
  slug,
  description,
  url,
  image,
  releaseDate,
}`;

export default function Search() {
    const searchValue = useRef(null);
    const [search, setSearch] = useState("");
    
    return (
        <div>
            <form action="/movies/">
            Name: <input TYPE="TEXT" Name="name" /><br></br>
            <input type="submit" ref={searchValue} value="insert"  />
            </form>
        </div>
    )
}