
export default function ForgetPassword() {
    return (
      <div className='flex flex-1 bg-gray-500 h-screen w-screen justify-center items-center'>
  
        <div className=' flex flex-col w-130 h-150 bg-indigo-100 rounded-2xl '>
          <p className='text-center font-bold mt-15 text-3xl'> Login</p>
  
          <div className="flex border-t border-gray-400 mt-5"></div>
  
          <div className="flex flex-col">
          <div className='ml-10 mr-10 mt-10 flex flex-row '>
            <input placeholder="Email" className='border-2 rounded-xl flex-1 p-1 h-12' />
          </div>
          <div className='ml-10 mr-10 mt-10 flex flex-row'>
            <input placeholder="Password" className='border-2 rounded-xl flex-1 p-1 h-12' />
          </div>
          <div className="mt-5 ml-10">
            <p className="">Forget Password? </p>
          </div>
          <div className="ml-10 mr-10 flex justify-center mt-10 ">
          <button className="bg-blue-400 rounded-2xl p-3 flex-1"><p className="font-bold"> Login</p></button>
          </div>
          <div className="mt-5">
            <p className="text-center">Not a member? <a href="" >Signup</a></p>
          </div>
          </div>
        </div>
      </div>
    )
  }
  