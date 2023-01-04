import Cities from "../components/Cities";
import Header from "../components/Header";

const Home = () => {
    return ( 
        <div id="home" className="w-full max-w-[80%] h-screen flex flex-col justify-between">
            <Header />
            <div className="flex flex-col justify-center items-center">
                <p className="text-6xl">日本国</p>
                <h1 className="text-9xl">JAPAN</h1>
            </div>
            <Cities />
        </div>
     );
}
 
export default Home;