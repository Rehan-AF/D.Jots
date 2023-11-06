import loginimage from '../../assets/login.jpg';
import metamask from '../../assets/metamask1.png';

const Login = () => {
  return (
    <div>
      <div
        className="flex flex-col  items-center justify-center  w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${loginimage})`,
          height: '100vh',
          gap: '16px',
        }}
      >
        <div>
          <img src={metamask} alt="logo" className="w-20" />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded">
            Wallet Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
