import Colunists from "../components/Colunists";
import api from "../services/api";

export async function getServerSideProps() {
  //const [autor, setAutor] = useState([]);
  const colunist = await api
    .get("https://kellek.com.br/wp-json/wp/v2/users?_embed")
    .then((res) => {
      // api
      //   .get(`https://kellek.com.br/wp-json/wp/v2/users/${res[0].author}`)
      //   .then((response) => setAutor(response.data.name));
      return res.data;
    })
    .then((response) => {
      return response;
    });
  return {
    props: {
      colunist,
    },
  };
}

export default function colunista(colunist) {
  console.log(colunist);
  return <Colunists colunist={colunist.colunist} />;
}
