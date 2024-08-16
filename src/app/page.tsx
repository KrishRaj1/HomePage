import Image from 'next/image';

export default function Home() {
  return (
    <>
      
      <div className="bg-primary h-12 w-full text-black flex justify-center items-center">
        <span>
          Sign up now and get the best <b><u>technology</u></b> and <b><u>management</u></b> consulting service!
        </span>
      </div>

      
      <div className="bg-gray-500 h-28 w-full flex items-center justify-between bg-opacity-50 px-4 md:px-10 flex-wrap">
        <div className="flex-shrink-0 w-24 h-20 border-l-2 border-r-white p-1">
          <span>
            NEOPHYTE <br /> CONSULTING <br /> SERVICE
          </span>
        </div>
        <div className="w-full md:w-2/6 h-10 bg-slate-400 bg-opacity-30 rounded-md flex justify-evenly items-center mt-4 md:mt-0">
          <div className="text-primary">Home</div>
          <div>Services</div>
          <div>About us</div>
          <div>Blogs</div>
          <div>Career</div>
        </div>
        <div className="border-2 h-10 w-28 flex items-center justify-center rounded-md border-primary mt-4 md:mt-0">
          Contact Us
        </div>
      </div>

      
      <div className="h-screen w-full bg-cover bg-center bg-[url('https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=800')] relative">
        
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative flex flex-col md:flex-row h-full">
          
          <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10 justify-center text-white z-10">
            <div className="flex flex-col md:flex-row items-center space-x-4 space-y-2 md:space-y-0">
              <span className="text-3xl md:text-4xl">Welcome to</span>
              <div className="bg-purple-600 py-2 px-4 rounded-md text-center">
                Neophyte Consulting Service
              </div>
            </div>
            <div className="text-2xl md:text-4xl mt-4 md:mt-6">A Vision of Your Dreams</div>
            <p className="mt-4 md:mt-6 text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries but also the
              leap into electronic typesetting remaining essentially unchanged.
            </p>
          </div>

          
          <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10">
            <Image
              src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Neophyte Consulting Service"
              width={800} 
              height={600} 
              className="w-full h-auto max-w-xs md:max-w-md rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
