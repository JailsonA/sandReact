import Layout from "./Layout";

function User() {
  const userPerfil = {
    nome: "Janilson",
    apelido: "Andrade",
    idade: 29,
    profissao: "Developer",
    categoria: "FullStack",
    url:
      "https://ouch-cdn2.icons8.com/9QT2FYw_cduZ-oiScqsvt0AbdavwqpkFRooVaDmNG8A/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjY3/L2E5ZjBiODJkLTNh/M2MtNDhmZi1iYjM0/LWNiYjczMWQwNmFh/NS5zdmc.png",
    sobre:
      "Ola sou um dev junior com muito conhecimento, entusiasmo e muita curiosidade sobre programação, gosto de desafios sobre development porque me leva a pesquisar e aprender sobre coisas novas"
  };
  return (
    <>
      <Layout userPerfil={userPerfil} />
    </>
  );
}

export default User;
