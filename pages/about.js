import Link from 'next/link';

const AboutPage = () => {
  const onChange = e => {
    window.ReactNativeWebView.postMessage(JSON.stringify(e));
    // console.log(e);
  };
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
      <input type="file" onChange={onChange} />
      <img src="https://api0.wehago.com/SynapDocViewServer/thumbnail/065f768b3e904bdfa456fa61171484e3/0" />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </>
  );
};

export default AboutPage;
