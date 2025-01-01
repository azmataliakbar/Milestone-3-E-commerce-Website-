import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-4 ">
      <div className="container mx-auto text-center ">
        <p className='text-[14px]  lg:text-xl  hover:scale-110 hover:text-yellow-300 font-bold'>&copy; {new Date().getFullYear()} My E-commerce Store. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <Link className="text-[14px]  lg:text-xl hover:text-yellow-300 font-bold" href="/terms"> 
              <p className="hover:scale-110">Terms of Service</p>
            </Link>
          </li>
          <li>
            <Link className="text-[14px] lg:text-xl hover:text-yellow-300 font-bold" href="/privacy">
              <p className="hover:scale-110">Privacy Policy</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;