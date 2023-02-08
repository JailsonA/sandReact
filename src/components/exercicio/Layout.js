import User from "./User";
import style from "./Layout.module.css";
function Layout({ userPerfil }) {
  function orgNome(userPerfil) {
    return userPerfil.nome + " " + userPerfil.apelido;
  }

  function checkNome(userPerfil) {
    if (userPerfil) {
      return (
        <>
          <img src={userPerfil.url} alt="userPerfil" />
          <h1>{orgNome(userPerfil)}</h1>
          <h3>
            {userPerfil.profissao} <span>{userPerfil.categoria}</span>
          </h3>
          <p>{userPerfil.sobre}</p>
        </>
      );
    } else {
      return <h2> User: Guest </h2>;
    }
  }

  return (
    <div className={style.box}>
      <p>{checkNome(userPerfil)}</p>
    </div>
  );
}

export default Layout;
