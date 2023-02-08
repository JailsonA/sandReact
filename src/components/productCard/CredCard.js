import style from "./CredCard.module.css";
import Sapatilha from "./Sapatilha";

function CredCard() {
  const sapatilha = {
    nikeVermelho: {
      nome: "Nike X OFF-white",
      modelo: "The 10: Air Jordan 1 off-white - Chicago",
      preco: 999,
      img: "https://i.ibb.co/cNWqxGx/red.png"
    },
    nikeAzul: {
      nome: "Nike X OFF-white",
      modelo: 'Air Jordan 1 Retro High "Off-White - UNC" sneakers',
      preco: 1599,
      img: "https://i.ibb.co/0JKpmgd/blue.png"
    }
  };

  return (
    <main className={style.container}>
      <section className={style.card}>
        <Sapatilha
          nome={sapatilha.nikeVermelho.nome}
          modelo={sapatilha.nikeVermelho.modelo}
          preco={sapatilha.nikeVermelho.preco}
          img={sapatilha.nikeVermelho.img}
        />
      </section>
      <section className={`${style.card} ${style.cardblue}`}>
        <Sapatilha
          nome={sapatilha.nikeAzul.nome}
          modelo={sapatilha.nikeAzul.modelo}
          preco={sapatilha.nikeAzul.preco}
          img={sapatilha.nikeAzul.img}
        />
      </section>
      <section className={`${style.card} ${style.cardblue}`}>
        <Sapatilha
          nome={sapatilha.nikeAzul.nome}
          modelo={sapatilha.nikeAzul.modelo}
          preco={sapatilha.nikeAzul.preco}
          img={sapatilha.nikeAzul.img}
        />
      </section>
    </main>
  );
}
export default CredCard;
