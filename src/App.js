import React from 'react';
import {useState, useEffect} from 'react';
import axios from './axios';


function App(props) {
  // const [inputField, setInputField] = useState("");
  const [results, setResults] = useState([]);

  useEffect(()=>{
    axios.get("/").then(rslt=>{
      console.log("initial query result", rslt);
      setResults(rslt.data);      
    }).catch(err=>{
      console.log(err);      
    })
  }, []);

  // const sendSearchRequest = () => {
  //   axios.get("/"+inputField).then(rslt=>{
  //     console.log(rslt);
  //     setResults(rslt.data);
    
  //   }).catch(err=>{
  //     console.log(err);      
  //   });
  // }

  console.log("results:", results);
  

  return (
    <div className="wrapper">
      <header>
        <h1>Beer catalog by <a href="https://punkapi.com/documentation/v2" target="_blank" rel="noopener noreferrer">Punk API</a></h1>
      </header>
      {/* <div id="input-field-container">
        <div className="input-field-wrapper">
          <input
            name="search-field"
            type="text"
            onChange={e=>{setInputField(e.target.value)}}
            autoComplete="off"
            placeholder="Search"
          />
          <button
            type="button"
            name="send-search-request"
            onClick={sendSearchRequest}
          >Search</button>
          {!!inputField.length && <p>{inputField}</p>}
          
        </div>
      </div> */}

      <div id="results-container">
        {/* <h2>Search result</h2> */}
        {!results.length && (
          <div className="pending">
            {/* <p>Page is loading...</p> */}
            <img src="spinner.gif" alt="spinner"/>
          </div>
        )}

        {!!results.length && results.map((beer,i) =>(
      
          <div style={{ zIndex:i+1, top: i*100+'vh'}} className="result-container" key={`${beer.id}`} data-id={beer.id}>
            <div  className="result">            
              <div className="result-img-container">
                <img src={`${beer.image_url}`} alt={`${beer.name}`} />
              </div>
              <div className="result-text-container">
                <h3>{beer.name} - <span className="tagline">{beer.tagline}</span></h3>
                <p>{beer.brewers_tips}</p>
                <p>{beer.description}</p>
                <h4>First brewed</h4>
                <p>{beer.first_brewed}</p>
                <h4>Boil volume</h4>
                <p>{beer.boil_volume.value} {beer.boil_volume.unit}</p>
                <h4>ph</h4>
                <p>{beer.ph}</p>
                <h4>Food pairing</h4>
                {beer.food_pairing.map((food,i)=>(                  
                      <p data-number={i} key={i}>{food}</p>                  
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* {results} */}
      </div>
      <footer> 
        <p>Created by <a href="https://github.com/dervarga"
          target="_blank"
          rel="noopener noreferrer"> dervarga</a>!
          Check it on
          <a href="https://github.com/dervarga/punky"
          target="_blank"
          rel="noopener noreferrer"> github!</a>!</p>
        <p>Powered by <a href="https://punkapi.com/documentation/v2" target="_blank" rel="noopener noreferrer">Punk API</a></p>
        <p>The background images are created by
          <a href="https://unsplash.com/@martz90" 
          target="_blank" 
          rel="noopener noreferrer"> Martin Kníže</a> and <a href="https://unsplash.com/@iameeshangarg" 
          target="_blank" 
          rel="noopener noreferrer">Eeshan Garg</a>, and can be found on 
          <a href="unsplash.com" 
          target="_about" 
          rel="noopener noreferrer"> Unsplash</a>. </p>
          <p>Parallax on <a href="https://codepen.io/ravid7000/pen/LREEzv"
          target="_about" 
          rel="noopener noreferrer">CodePen</a> by Ravi Dhiman</p>

        {/* <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@martz90?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Martin Kníže"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Martin Kníže</span></a>
        <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@iameeshangarg?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Eeshan Garg"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Eeshan Garg</span></a> */}

      </footer>
    </div>
  )


} 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
