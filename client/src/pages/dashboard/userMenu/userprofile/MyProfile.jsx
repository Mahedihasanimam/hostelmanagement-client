import UseAuth from "../../../../hooks/UseAuth"

import cover from "../../../../assets/851x315-french-sky-blue-solid-color-background.jpg"
const MyProfile = () => {
  const { user } = UseAuth()

  console.log(user)
  return (
    <div className='flex justify-center items-center h-screen'>
      {/* <Helmet>
        <title>MyProfile</title>
      </Helmet> */}
      <div className='bg-white shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src={cover}
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-blue-500 rounded-full'>
            Admin
          </p>

          {/*TODO//= daynamic valu */}
          <p>
            
            0 meal added
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className=' text-center w-fit text-sm mx-auto text-gray-600 '>
              <p className='flex '>
               <span> Name </span>
                <span className='font-bold text-black '>
                 :  {user.displayName}
                </span>
              </p>
              <p className='flex '>
                Email 
                <span className='font-bold text-black '> : {user.email}</span>
              </p>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile