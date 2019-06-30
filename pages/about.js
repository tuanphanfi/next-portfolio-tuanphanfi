import Link from "next/link";
import Layout from "../components/Layout";

export default () => (

    <Layout title="About">
        <Link href="/">
            <a>Go to home</a>
        </Link>

        <p>A JavaScript programmer </p>
        <img src="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png" width="200px" alt="JS" />
    </Layout>
);
