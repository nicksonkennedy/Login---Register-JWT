import React,{useState} from 'react'
import { EyeOutlined,  UserOutlined} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSignup } from '../Hooks/useSignup';
import LinearProgress from '@mui/material/LinearProgress';


const Register = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [viewPassword, setviewPassword] = useState(false)

  const {signup, error, isLoading} = useSignup()

  const submitHandler = async (e) =>{
    e.preventDefault()
     const data = await signup(email, password)
   if(data){
    navigate('/dashboard')
   }else{
    navigate('/register')
   }
  }
  return (
  <div  className='bg-gray-200 p-2'>
      <div className='max-w-sm mx-auto bg-slate-500 shadow-2xl relative mt-[4rem] rounded-lg'>
      {isLoading && <LinearProgress  color="secondary"/>}
        <div className='p-3'>
          <div>
          <h1 className='text-center text-4xl text-white tracking-[.25em] font-monospace mb-10'>Register</h1>
         
          </div>
           <form onSubmit={submitHandler}>
           {error && <div className='p-2 bg-red-100 text-red-500 font-monospace text-sm border-1 border-red-200 rounded-md'>{error}</div>}
           <div className='relative mt-3 '>
              <input type='text' className='relative w-full p-3 rounded-md' placeholder='Enter Email Address' value={email} onChange={e=>setemail(e.target.value)} />
              <UserOutlined  className='absolute right-3 bottom-4 text-xl'/>
              </div>

              <div className='relative mt-4 '>
               <input type={viewPassword ? 'text' : 'password'} className='relative w-full p-3 rounded-md' placeholder='Enter Password' value={password} onChange={e=>setpassword(e.target.value)}/>
              <EyeOutlined  className='absolute right-3 bottom-4 text-xl cursor-pointer' onClick={e=>setviewPassword(!viewPassword)}/>
              </div>

              <div className='relative mt-4 '>
             <button
              type='submit'
               className='group w-full bg-yellow-600 shadow-2xl text-white p-2 rounded-xl text-xl transition-all delay-150 ease-out'
               disabled={isLoading}
              >
                Register  
                
                </button>
              </div>

              <div className='mt-10 text-center mb-10 relative'>
                <span className='text-slate-200 font-semibold cursor-pointer  text-[1rem] relative' >Alread Have An Account..? </span>
               <br/> <Link to='/' className='text-yellow-500 text-sm'>Login Here</Link>
              </div>
           </form>
        </div>
    </div>
  </div>
  )
}

export default Register