import { useRef } from "react";
import { usePlausible } from "next-plausible";
import { sanityClient } from "../sanity";
import { GetServerSideProps } from "next";
import { groq } from "next-sanity";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const plausible = usePlausible();
  const searchArticles = () => {
    if (inputRef.current !== null && inputRef.current.value.length > 0) {
      plausible("Search", { props: { query: inputRef.current.value } });
    }
  };

  const litePostFields = `
    title,
    releaseDate
  `;

  const searchQuery = groq`
    *[_type == 'movies' && title match "*" + $searchTerm + "*"] | order(title) [0...10]{
      title,
      releaseDate
    }
    `;

  const getServerSideProps: GetServerSideProps = async (context) => {
    const posts = await sanityClient.fetch(searchQuery, {
      searchTerm: context.query.query,
    });

    return {
      props: {
        posts,
      },
    };
  };

  return (
    <form
      className=""
      action="/search"
      role="search"
      onSubmit={() => searchArticles()}
    >
      <div className="">
        <label htmlFor="search" className="">
          Search
        </label>
        <div className="">
          <div className=""></div>
          <input
            ref={inputRef}
            id="search"
            name="query"
            className=""
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
    </form>
  );
};
export default SearchBar;
