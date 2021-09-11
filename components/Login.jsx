import Image from 'next/image';
import { signIn } from 'next-auth/client';

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
        alt="Image"
      />
      <h1
        className="p-5 bg-blue-500 rounded-full text-white cursor-pointer text-center"
        onClick={signIn}
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
