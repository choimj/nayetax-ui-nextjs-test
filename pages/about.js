import Link from 'next/link';
import {useState} from 'react';

const AboutPage = () => {
  const [txt, setTxt] = useState('initialState');
  const onChange = e => {
    debugger;
    
    // window.ReactNativeWebView.postMessage('e.target.files');
    // setTxt(e.target.files);
    setTxt(JSON.stringify(e.target.files));
    // window.ReactNativeWebView.postMessage(JSON.stringify(e.target));
    // console.log(e);
  };
  return (
    <>
      <h1>About</h1>
      <button
        onClick={e => {
          window.ReactNativeWebView.postMessage('test');
        }}
        style={{width: '100px', height: '100px'}}
      />
      <p>{txt}</p>
      <input type="file" onChange={onChange} />

      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </>
  );
};

export default AboutPage;
