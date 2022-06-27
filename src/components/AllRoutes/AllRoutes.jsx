import {Home} from '../Home';
import {MovieFinder} from '../MovieFinder/MovieFinder';
import {LanguageTranslator} from '../LanguageTranslator/LanguageTranslator';
import {Routes,Route} from 'react-router-dom';
import {NumberGame} from "../NumberGame/NumberGame"
export const AllRoutes = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/movie" element={<MovieFinder/>}></Route>
            <Route path="/translator" element={<LanguageTranslator/>}></Route>
            <Route path="/numberGame" element={<NumberGame/>}></Route>
        </Routes>
        </>
    )
}