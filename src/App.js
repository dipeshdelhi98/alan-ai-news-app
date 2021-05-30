import React, { useState,useEffect } from 'react';

import alanBtn from '@alan-ai/alan-sdk-web';


import { NewsCards, Modal } from './components';
import useStyles from './styles';

const App = () => {
  
  const [newsArticles, setNewsArticles] = useState([]);


  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key:'bd71a8a82ade05440532776c741e361c2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          
        } 
      },
    });
  }, []);

  return (
    <div>
              <p>Try to use these commands by clicking on the voice icon below</p>
        <u>
          <li>'What does this app do?', 'What can I do here?</li>
          <li>Give me the news from BBC News'</li>
          <li>Give me the latest news'</li>
        </u>
      <div className={classes.logoContainer}>
       
        <h1 style={{color:'blue'}}>Voice Assistant News Application</h1>


      </div>
      <NewsCards articles={newsArticles}  />
     
    </div>
  );
};

export default App;
