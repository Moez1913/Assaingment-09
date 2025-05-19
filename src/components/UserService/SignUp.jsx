import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Signup = () => {
 
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { creatUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value
    const name=e.target.name.value
    const url=e.target.photoURL.value

 if (password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return;
  }
  if (!/[A-Z]/.test(password)) {
    toast.error('Password must contain at least one uppercase letter');
    return;
  }
  if (!/[a-z]/.test(password)) {
    toast.error('Password must contain at least one lowercase letter');
    return;
  }
  if (!/[0-9]/.test(password)) {
    toast.error('Password must contain at least one number');
    return;
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    toast.error('Password must contain at least one special character');
    return;
  }
   creatUser(email, password,name,url)
      .then(result => {
        console.log(result.user)
        e.target.reset()
        navigate('/')
        .then(() => {
          
        })
        .catch(error => {
          if(error){
            toast.error('Something wrong! Please! tray again')
            return
          }

        })
        {
          toast.success('Account Created Successfully')
        }
      

      })
      .catch(error => {
        console.log(error.message)
        toast.error(error.message)
      })

    }


  return (
   <>
   <Helmet>
    <title>CareerGuidePro|SignUp</title>
   </Helmet>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for CareerGuidePro</h2>
        <form onSubmit={handelSubmit} className="space-y-4">
          <input
          name='name'
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name='photoURL'
            placeholder="Photo URL"
            required
            className="w-full p-3 border rounded"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <input
            type="email"
            name='email'
            placeholder="Email"
            required
            className="w-full p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name='password'
              required
              className="w-full p-3 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Register
          </button>
          <p className="text-center text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
   </>
  );
};

export default Signup;
