
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/login"}>Login</Link>
        </ul>

        
    </div>
  )
}

export default Home