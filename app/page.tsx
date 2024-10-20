import Characters from "@/app/Characters";
import Navbar from '@/components/Navbar';
import Search from "@/components/Search";


const Home = () => {
    return (
        <div className='w-full h-screen '>
            <Navbar />  
                     
            <Characters/>
        
        </div>
    )
}

export default Home;