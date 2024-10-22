import "./App.css";
import { useEffect, useState } from "react";
import fetchPhotos from "./components/utils/unsplash-api";
import { IoSearch } from "react-icons/io5";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  return (
    <div>
      <Loader />
      <header>
        <form>
          <button type="submit">
            <IoSearch />
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};

export default App;
