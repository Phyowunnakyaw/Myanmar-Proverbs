import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Proverbs from "./pages/Proverbs";
import ProverbDetail from "./pages/ProverbDetail";

function App() {

  let [ datas, setData ] = useState( null );
  let [ error, setError ] = useState( null );
  let [ loading, setLoading ] = useState( false );

  const fetchData = async() => {

    try {
      setLoading( true );
      const response = await fetch( '../data/db.json' );
      if( !response.ok ) {
        throw new Error ( 'Network Error.....' );
      }
      const data = await response.json();
      setData( data );
      setLoading( false );
      setError( null );
    } catch ( err ) {
      setError( err.message );
      setLoading( false );
    }

  };

  useEffect( ( ) => {

    fetchData();

  }, [ ] );

  return (
     
          <>
          
            <BrowserRouter>
            
                  <NavBar />

                  <Routes>

                          <Route path="/" element= { datas && <Home datas={ datas } loading={ loading } error={ error } /> } />
                          <Route path="/proverbs/:id" element= { datas && <Proverbs datas={ datas } loading={ loading } error={ error } /> } />
                          <Route path="/proverbs/:id1/:id2" element= { datas && <ProverbDetail datas={ datas } loading={ loading } error={ error } /> } />
                          
                  </Routes>

            </BrowserRouter>

          </>
          

  )
}

export default App;
