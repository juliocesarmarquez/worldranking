import Layout from './components/Layout/Layout'
import styles from './page.module.css'

export default function Home({countries}) {
  console.log(countries);
  return <Layout>main</Layout>;
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};