import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div>
        <footer className="flex justify-center bg-gray-800 text-white py-6 mt-10">
            <img src={Logo} alt="Logo" className='h-16'/>
        </footer>
    </div>
  )
}

export default Footer
