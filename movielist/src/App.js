
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react"
import AddFilm from './Components/AddFilm';
import ListFilm from './Components/ListFilm';
import RateFilm from './Components/RateFilm';
import SerchFilm from './Components/SerchFilm';
import  './App.css'



function App() {
  const [Movies, setMovies] = useState([    //initialition d'un hook qui est notre fake Data
    {
      _id: 1,
      title: "Adam à travers le temps",
      rate: 4,
      date: "28 février 2022",
      imgUrl:
        "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
      description:"Après un atterrissage forcé en 2022, le pilote de chasse et voyageur dans le temps Adam Reed fait équipe avec une version de lui-même âgée de 12 ans pour sauver le futur.",
      category: "Drame",
      __v: 0,
    },
    {
      _id: 2,
      title: "El Jaida",
      rate: 5,
      date: "2017",
      imgUrl:"https://pictures.artify.tn/media/cwnbdwr0zttavvcnwopv.jpg?width=200",
      description:"Quatre femmes se retrouvent à Dar Joued (prison de femmes) huit mois avant l'indépendance de la Tunisie (entre octobre 1954 et juin 1955). D'âges et de conditions sociales différents, elles sont condamnées à cohabiter en subissant l'autorité et les injustices de leur geôlière : la jaida. Elles vont partager souvenirs du monde extérieur, joie, émotions et détresse de leur quotidien",
      category: "Drame",
      __v: 0,
    },
    {
      _id: 3,
      title: "Derrière Les Portes Fermées",
      rate: 4,
      date: "2014",
      imgUrl:
        "https://pictures.artify.tn/media/xw8q1t1ff8axgjlc0clp.png?width=200",
      description:"Une jeune femme victime de harcèlement sexuel de la part du directeur de la nouvelle entreprise.",
      category: "Fiction",
      __v: 0,
    },
    {
      _id: "4",
      title: "Papillon d'or ",
      rate: 4,
      date: "2021",
      imgUrl:
        "https://pictures.artify.tn/media/ftoqq8jmkfpwb3ym87mo.png?width=200",
      description: "Moez, policier trentenaire au passé sanglant, rencontre un petit garçon avec qui il entreprend un voyage fantastique….",
      category: "Fiction",
      __v: 0,
    },
    {
      _id: 5,
      title: "La Dernière Heure",
      rate: 3,
      date: "2008",
      imgUrl:
        "https://pictures.artify.tn/media/oqw5orzgzojgfrmdceoy.jpg?width=200",
      description:
        "Dans un journal qui s appelle ironiquement « le journal » l histoire d un grand chantage a commencé. Inutile de vous dire que cette confusion qui s est passée dans la tête de un trafiquant de pièces historiques (Mohamed Said) entre ses circuits de trafic et un article publié par un historien chercheur (Moncef Souissi) sur les circuits routiers entrepris par Hannibal pendant ses guerres, ne avait aucun sens.",
      category: "Comedy | Drama",
      __v: 0,
    },
    {
      _id: 6,
      title: "Le Toucher",
      rate: 5,
      date: "2023",
      imgUrl:
        "https://pictures.artify.tn/media/lp98iomkhjtz9xldwy2p.png?width=200",
      description:
        "Hajar was forced to marry a blind man after being raped by her friend who left her and then came back to her in search of legitimacy for the paternity of her son..",
      category: "Fiction",
      __v: 0,
    },
    {
      _id: 7,
      title: "Jeudi après-midi",
      rate: 5,
      date: "2012",
      imgUrl:
        "https://pictures.artify.tn/media/skzja2qm2idinlevyde0.jpg?width=200",
      description:"Mustapha, a sixty-year-old businessman close to power, but quarantined by his own party, is the victim of a road accident. He becomes dependent. His four children each experience the situation in their own way but cannot take care of him. The arrival of the nurse, Zohra, worries and upsets the family. ",
      category: "  Fiction| Drama",
      __v: 0,
    },
  ])
  const [show, setShow] = useState(false); //initialition d'un hook de l'affichage dont sn état initial est faux càd masquer
  const handleShow = () => setShow(!show);  //création d'une fonction handleShow  qui nous modifie le hook que ns avons créer à l'aide du commende set càd quand on appelle la fct elle vas ns donner masquer si elle est afficher et vis vers ça.

  const [showRate, setShowRate] = useState(false);  //initialition d'un hook de l'affichage de l'évaluation du film dont sn état initial est faux càd masquer
  const handleShowRate = () => {  //création d'une fonction handleShowRate  qui nous modifie le hook que ns avons créer à l'aide du commende set càd quand on appelle la fct elle vas ns donner masquer si elle est afficher et vis vers ça et elle ns permet aussi de changer l'évaluation ou la note de film
    setSearchRate(0);
    setShowRate(!showRate);
  };

  
  const [searchName, setSearchName] = useState("");  //initialition d'un hook de recherche par nom et sa valeur est vide par défaut
  const [searchRate, setSearchRate] = useState(5);   //initialition d'un hook de recherche par évaluation et sa valeur est 5 par défaut
  const AddaFilm = (Movie) => {      //création d'une fonction qui nous modifie le hook que ns avons créer à l'aide du commende set 
    setMovies([...Movies, Movie]);   // modification du hook person on utilisant spread syntax pour décomposer le tableau en eléments et aprés ajouter un autre élement 
  };

  console.log(Movies);
  return (
   
<div className="App">
        <button style={{ margin: "20px" }} onClick={handleShow}> {/*on passe la fonction hzndleShow dans un evenement de click de bouton*/}
          {show ? "Close" : "Add New Movie"}   {/*  condition si avec Ternary Operator la state show est est active alors on clique fermer si nn ajouter in nv film*/}
        </button>
        {show && <AddFilm AddaFilm={AddaFilm} />} {/* on appelle le composant AddFilm et on ajoute la state show  et on passe AddaFilm comme props*/}

        <SerchFilm setSearchName={setSearchName} setSearchRate={setSearchRate} />  {/* on appelle le composant SearchFilm et on passe searchName et searchRate comme props*/}
        <button style={{ margin: "20px" }} onClick={handleShowRate}>  {/*on passe la fonction handleShowRate dans un evenement de click de bouton*/}
          {show ? "Clear" : "Search by Rate"}  {/*  condition si avec Ternary Operator la state show est est active alors Clear si nn chercher par note*/}
        </button>
        {/* on appelle le composant RateFilm et on ajoute la state showRate  et on passe searchRate et setSerchRate comme props*/}
        {showRate && (     
          <RateFilm searchRate={searchRate} setSearchRate={setSearchRate} /> 
        )}
         {/* on appelle le composant ListFilm et on passe Movies et searchRate et setSerchRate comme props*/}
        <ListFilm
          Movies={Movies}
          searchName={searchName}
          searchRate={searchRate}
        /> 
      </div>
   
  );
}

export default App;
