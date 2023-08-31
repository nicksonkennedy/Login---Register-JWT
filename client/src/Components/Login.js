import React,{useState} from 'react'
import { EyeOutlined, LoginOutlined, UserOutlined} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../Hooks/useLogin';
import LinearProgress from '@mui/material/LinearProgress';

const Login = () => {
const navigate = useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [viewPassword, setviewPassword] = useState(false)

  const {login, isLoading, error} = useLogin()

  const submitHandler =async (e) =>{
    e.preventDefault()
    const data = await login(email, password)
   if(data){
    navigate('/dashboard')
   }else{
    navigate('/')
   }
  }
  return (
  <div  className='bgImage p-2'>
      <div className='max-w-sm mx-auto bg-slate-700 shadow-2xl relative mt-[4rem] rounded-lg'>
      {isLoading && <LinearProgress  color="secondary"/>}
        <div className='p-3'>
        
           <div className='mx-auto text-center'><img src='payments.png' alt='' className='h-[8rem] mx-auto text-center' /></div>

           <form onSubmit={submitHandler}>
           {error && <div className='p-2 bg-red-100 text-red-500 font-monospace text-sm border-1 border-red-200 rounded-md mt-4'>{error}</div>}

           <div className='relative mt-3 '>
              <input type='email' className='relative w-full p-3 rounded-md' placeholder='Enter Email Address' value={email} onChange={e=>setemail(e.target.value)} />
              <UserOutlined  className='absolute right-3 bottom-4 text-xl'/>
              </div>

              <div className='relative mt-4 '>
              <input type={viewPassword ? 'text' : 'password'} className='relative w-full p-3 rounded-md' placeholder='Enter Password' value={password} onChange={e=>setpassword(e.target.value)}/>
              <EyeOutlined  className='absolute right-3 bottom-4 text-xl cursor-pointer' onClick={e=>setviewPassword(!viewPassword)}/>
              </div>

              <div className='relative mt-4 '>
             <button
              type='submit'
               className='group w-full bg-yellow-600 shadow-2xl text-white p-2 rounded-xl text-xl transition-all delay-150 ease-out '
               >
                Login  
                 <LoginOutlined className='relative bottom-1 text-xl left-2 group-hover:scale-125' />
                </button>
              </div>

             

              <div className='mt-5 text-center mb-2'>
                <span className='text-white font-semibold cursor-pointer '>No Account Yet.? <br/> <Link to='/register'>Register Here</Link></span>
              </div>
           </form>
        </div>
    </div>
  </div>
  )
}

export default Login