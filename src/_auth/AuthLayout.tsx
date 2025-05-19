import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false; // replace with actual auth logic later

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="flex flex-1 flex-row justify-center items-center h-screen">
  <div className="flex flex-1 justify-center items-center flex-col py-10">
    <Outlet />
  </div>
  <img
  src="/assets/images/side-img.svg"
  alt="logo"
  className=" h-screen w-1/2 object-cover bg-no-repeat"
/>

</section>

      )}
    </>
  );
};

export default AuthLayout;
