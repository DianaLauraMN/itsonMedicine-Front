import style from "./Search.module.css";

const Search = () => {
  return (
    <>
      <div className={style.search}>
        <form>
          <div className={style.inputSearch}>
            <input type="text" placeholder="Search" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
