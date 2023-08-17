import Characters from "@/app/Characters";
import Navbar from '@/components/Navbar'


const Home = () => {
    return (
        <div className='relative w-full h-screen mx-auto'>
             <Navbar />           
            <Characters />
        </div>
    )
}

export default Home;