import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { setAuthToken } from '../../utilities/authToken';

const SocialLogin = () => {
    const { googleProviderLogin } = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
const from = location?.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleProviderLogin()
          .then((result) => {
            const user = result.user;
              setAuthToken(user);
              navigate(from, { replace: true });
          })
          .catch((err) => console.error(err));
    }
    return (
      <div>
        <p className="text-center font-bold">Or Sign in with</p>
        <div className='flex justify-center mt-4'>
          <button onClick={handleGoogleLogin} className="btn btn-outline hover:bg-orange-600 hover:border-none text-orange-600">
            Google
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;