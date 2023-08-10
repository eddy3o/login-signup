import { useState } from 'react'
import './Principal.css'

export function Principal() {
  
  const buttonStyle = 'text-white border-[2px] border-white rounded-[10px] px-[25px] py-[7px] text-[0.8rem] transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#000] hover:cursor-pointer transform hover:scale-105 justify-self-end'
  const [isOpen, setIsOpen] = useState(false)
  const [isHome, setIsHome] = useState(true)

  const handleIsHome = () => {
    setIsHome((prev) => !prev)
    if (isHome) {
    }
  }

  return (
    <div className="principal text-[0.9rem] ">


      <div className='header bg-[#376497] flex items-center justify-between px-[5rem] pt-[0.5rem] text-[0.8rem] pb-[0.5rem] w-[100%]'>
        <div className= 'menu flex w-[5%]'>
          <ul className='rinde flex w-[100%] justify-start'>
            <li className='mr-[3rem] hover:cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 text-3xl text-white'>
              Home
            </li>
          </ul>
        </div>
        <div className='w-[60%] space-x-5'>
        <form>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full h-[3.2rem] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required /> 
                <button type="submit" class="text-white absolute h-[2.3rem] right-2.5 bottom-2 bg-[#376497] hover:bg-[#73a5df] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
            </div>
        </form>
        </div>
        
        <div className='buttons space-x-4 align justify-end'>
            <button onClick={() => setIsOpen((prev) => !prev)} 
            className={`text-white border-[2px] border-white rounded-[10px] px-[25px] py-[7px] text-[0.8rem] transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#000] hover:cursor-pointer ${isOpen ? ' text-[#000000] bg-[#f5f9fffb] ' : ''}`}
            >
              Cuenta
              {!isOpen && (
                <div></div>
              )}
              {isOpen && (
                <div className='absolute top-[4rem] right-[2.7rem] bg-blue-100 w-[10rem] h-[6rem] rounded-[10px] text-[#000] hover:bg-blue-100 hover:text-[#000] '>
                  <div className='flex flex-col space-y-0 '>
                    <button className='transition duration-500 hover:bg-[#fff] ease-in-out hover:text-[#000] rounded-[10px] w-[10rem] h-[3rem]'>Mi cuenta</button>
                    <button className='transition duration-500 hover:bg-[#fff] ease-in-out hover:text-[#000] rounded-[10px] w-[10rem] h-[3rem]'>Salir</button>
                  </div>
                </div>
              )}
            </button>
          </div>
      </div>


 
      <div className='main flex'>
        <div className='left-bar bg-white w-[15%] h-[100vh]'>
          <div className='up-bar h-auto flex justify-center pt-3 pb-3 items-center'>
            <button className='border-[2px] bg-[#f5f9fffb] px-[16px] h-9'>Aprovador</button>
            <button className='border-[2px] bg-[#f5f9fffb] px-[16px] h-9'>Rendidor</button>
          </div>
          <div className='bar h-auto flex flex-col pb-6'>
            <button className={`relative h-11 bg-white transition duration-300 hover:bg-[#f5f9fffb]${isHome ? ' text-[#316197] font-bold bg-[#f5f9fffb] ' : ''}`} onClick={handleIsHome}>Home
            {isHome && (
              <div className='absolute left-0 top-0 bg-[#316197] w-1.5 h-11'>
                
              </div>
            )}
            </button>
            <button className={`h-11 bg-white `}> Revision</button>
            <button className={`h-11 bg-white `}> Rendir</button>
            <button className={`h-11 bg-white `}> Aprovador</button>
            <button className={`h-11 bg-white `}> Aprovados</button>
          </div>
        </div>
        <div className='right-bar bg-[#f5f9fffb] w-[85%] h-[100vh]'>
          <div className='up-bar bg-white w-[100%] h-[45px] flex items-center'>
            <button className='px-[25px] bg-[#f5f9fffb] h-[45px] text-[#316197] font-bold'>Resumen</button>
          </div>
          <div className='main-bar w-[100%] h-[100vh]'>
                <h2 className=' text-5xl px-10 pt-3 text-[#316197]'>Bienvenido!</h2>
          </div>
        </div>
      </div>

    </div>

    
  )
}
