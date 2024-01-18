import { getFilms } from "../api/films/route";
import Films from "../components/Films";
import Layout from "../components/Layout";
import useSWR from "swr";

const FilmsList = async () => {
  const films = await getFilms();
  // const { data } = useSWR(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/films`,
  //   getFilms,
  //   {
  //     fallbackData: films,
  //   }
  // );
  console.log(films);
  return (
    <Layout>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
          Films
        </span>
      </h1>
      <Films films={films} />
    </Layout>
  );
};

export default FilmsList;
