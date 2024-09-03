const Home = () => {
  return (
    <div className=" bg-[#9873FF05]">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex justify-center flex-col space-y-6 text-center lg:text-start">
            <h1 className="text-7xl font-bold me-25">
              One Step Closer To Your Dream Job
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div>
              <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              className=" w-full"
              src="../../../src/assets/images/user.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
