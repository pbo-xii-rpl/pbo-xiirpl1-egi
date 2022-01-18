import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='navbar bg-blue-600'>
          <div className='container flex mx-auto items-center'>
              <div className='w-3/12'>
                <div className='logo text-white text-center uppercase font-semibold text-2xl'>
                  egi
                </div>
              </div>
              <div className='w-3/12'>
                <div className='nav text-center'>
                  <ul className='nav-item text-white text-opacity-60 flex justify-center space-x-6 py-6 font-semibold'>
                      <li><a className='text-white text-opacity-60 font-semibold ttext-lg'>Profile
                        </a></li> 
                      <li><a className='text-white text-opacity-60 font-semibold text-lg'>Skills
                        </a></li> 
                      <li><a className='text-white text-opacity-60 font-semibold text-lg'>Project
                        </a></li> 
                      <li><a className='text-white text-opacity-60 font-semibold text-lg'>Contact
                        </a></li>
                  </ul>
                </div>
              </div>
              <div className='w-3/12'>
                <div className='button text-center'>
                  <a className='text-white font-semibold border border-yellow-500 text-yellow-300 rounded-full px-6 py-2'>Kontak</a>
                </div>
              </div>
          </div>
        </div>
      )
    }

export default App;
