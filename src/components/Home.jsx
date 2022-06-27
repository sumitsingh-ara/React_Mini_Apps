import movies from '../assets/images/Movie.png';
import translator from '../assets/images/LnaguageTranslator.png';
import number from '../assets/images/NumberGame.png';
import './NumberGame/Number.css';
import {useNavigate} from "react-router-dom"
export const Home =() => {
    const navigate = useNavigate()
    return(
        <>
        <h1 className="h4">Welcome to mini apps</h1>
        <div id="carouselExampleControls" className="carousel slide mainDivCaraousel" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" onClick={() =>{
        navigate('/numberGame')
    }}>
      <img className="" src={number} alt="First slide"/>
    </div>
    <div className="carousel-item"onClick={() =>{
        navigate('/movie')
    }}>
      <img className="" src={movies} alt="Second slide"/>
    </div>
    <div className="carousel-item" onClick={() =>{
        navigate('/translator')
    }}>
      <img className="" src={translator} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" id="colorChanger" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </>
    )
}