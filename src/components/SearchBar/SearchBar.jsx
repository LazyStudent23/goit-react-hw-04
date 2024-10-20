import { IoSearch } from "react-icons/io5";

import css from "../SearchBar/SearchBar.module.css";

const SearchBar = () => {
  return (
    <header className={css.header}>
      <form className={css.headerForm}>
        <button type="submit" className={css.inputBtn}>
          <IoSearch />
        </button>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          className={css.headerInput}
        />
      </form>
    </header>
  );
};

export default SearchBar;
