import style from "./CredCard.module.css";
function Sapatilha({ nome, img, preco, modelo }) {
  return (
    <>
      <div className={style.productimage}>
        <img src={img} alt="OFFwhiteRedEdition" draggable="false" />
      </div>
      <div className={style.productinfo}>
        <h2>{nome}</h2>
        <p>{modelo}</p>
        <div className={style.price}>{preco} €</div>
      </div>
      <div className={style.btn}>
        <button className={style.buybtn}>Buy Now</button>
        <button className={style.fav}>
          <svg
            className={style.svg}
            id="i-star"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
          </svg>
        </button>
      </div>
    </>
  );
}
export default Sapatilha;
