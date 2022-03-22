import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import  {NavbarComponent}  from '../components/NavbarComponent';
import CardMovie from '../components/sectionFeature/CardMovie';

function App() {
  const [theme, setTheme]=useState('light');
  const movieList=[
    {
      Title:'Spiderman',
      Img:'img/spiderman.jpg',
      Synopsis:`With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.`,
    },
    {
      Title:'The Batman',
      Img:'img/Batman.jpg',
      Synopsis:`When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.`,
    },
    {
      Title:'Uncharted',
      Img:'img/Uncharted.jpg',
      Synopsis:`Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.`,
    },
  ]
  function changeTheme(theme){
    // if(theme == 'light'){
    //   return 'dark'
    // }else{
    //   return 'light'
    // }
    // console.log(theme)

  }
  return (
    <>
   {/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/> */}
    <div className="App"> 
    <NavbarComponent theme={theme} />
    <div className='container mt-3 '>
      <div className='row justify-content-center'>
        {
          movieList.map((item)=>(
            <CardMovie Title={item.Title} Img={item.Img} Synopsis={item.Synopsis}/>
          ))
      }
        
        
        </div>
    </div>
    
    {/* <button type='button' onClick={console.log(theme)}>klik</button> */}
    </div>
    {/* <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script> */}
    </>
  );
}

export default App;
