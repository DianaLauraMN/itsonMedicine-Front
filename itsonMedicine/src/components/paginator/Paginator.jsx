import style from "./Paginator.module.css";

const Paginator = () => {
  return (
    <>
      <div className={style.paginator}>
        <a>1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
        <a>5</a>
      </div>
    </>
  );
};

export default Paginator;
