import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="text-6xl text-red-300">I am from Home page.........</h1>
            <Link to="/blogs" className="btn btn-outline btn-primary">See Blogs</Link>
        </div>
    );
};

export default Home;