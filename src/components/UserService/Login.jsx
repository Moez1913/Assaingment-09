import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';
import { Helmet } from 'react-helmet';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef()
  const { loginUser } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(result => {
        console.log(result.user)
        toast.success('Login SuccesFull!')
        navigate('/')
        e.target.reset()
      })
      .catch(error => {
        console.log(error.message)
        setErrorMessage(error.message)
        {
          errorMessage === "Firebase: Error (auth/invalid-credential)." && toast.error('Wrong password or email')
        }
      })

  };
  const handelReset = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success('Password Send To your Email')
        })
    }

  }

  return (
    <>
      <Helmet>
        <title>CareerGuidePro|Login</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to CareerGuidePro</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              ref={emailRef}
              className="w-full p-3 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
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
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Login
            </button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
            </p>

            {
              errorMessage === "Firebase: Error (auth/invalid-credential)." && <>
                <p ClassName='text-yellow-400'>Wrong password or email</p>

              </>


            }

          </form>
          <button onClick={handelReset} className="text-center text-sm text-blue-600">
            Forget Password?
          </button>

        </div>
        <ToastContainer></ToastContainer>

      </div>
    </>
  );
};

export default Login;
