import Link from "next/link";

const AboutPage = () => (
  <>
    <h1>About</h1>
    <p>This is the about page</p>
    <input type="file" />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

export default AboutPage;
