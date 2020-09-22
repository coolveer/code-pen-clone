import React, {useState,useEffect} from 'react';
import UselocalStorage from '../hooks/uselocalStorage';
import Editor from './Editor';



function App() {
  const [html, setHtml] = UselocalStorage('HTML','');
  const [css, setCss] = UselocalStorage('CSS','');
  const [js, setJs] = UselocalStorage('javascript','');
  const [SrcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</html>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `,250)
    })

    return () => clearTimeout(timeout);
  }, [html,css,js])
  return (
    <>
      <div className="pane top-pane">
        <Editor
          language='xml'
          displayName="HTML" 
          value={html}
          onChange={setHtml}
        />
        <Editor 
          language='css'
          displayName="CSS" 
          value={css}
          onChange={setCss}
        />
        <Editor 
          language='javascript'
          displayName="JAVASCRIPT" 
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc ={SrcDoc} 
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
