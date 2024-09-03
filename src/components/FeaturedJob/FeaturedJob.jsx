import { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { LuCircleDollarSign } from 'react-icons/lu';
const FeaturedJob = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('/public/jobs.json')
      .then((res) => res.json())
      .then((dt) => setDatas(dt));
  }, []);
  return (
    <div>
      <div className="my-40 mx-auto w-11/12">
        <div className="text-center space-y-5 mb-10">
          <h1 className="text-5xl font-extrabold">Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {datas.map((data) => (
            <div key={data.id} className="border p-10 rounded">
              <img className="mb-10 w-[200px]" src={data.logo} alt="" />
              <h1 className="mb-3 text-2xl font-bold">{data.job_title}</h1>
              <p className="text-gray-500">{data.company_name}</p>
              <button className="border-2 py-1 px-4 text-[#7E90FE] border-[#7E90FE] me-3 my-3">
                {data.remote_or_onsite}
              </button>
              <button className="border-2 py-1 px-4 text-[#7E90FE] border-[#7E90FE]">
                {data.job_type}
              </button>
              <div className="flex justify-between lg:justify-start lg:gap-5">
                <p className="text-xl text-gray-400 flex items-center">
                  <FaLocationDot className="inline mr-2" /> {data.location}
                </p>
                <p className="text-xl text-gray-400 flex items-center">
                  <LuCircleDollarSign className="inline mr-2" /> {data.salary}
                </p>
              </div>
              <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white rounded-0 mt-5">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
