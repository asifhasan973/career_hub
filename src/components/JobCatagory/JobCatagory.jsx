import { useEffect, useState } from 'react';

const JobCatagory = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('/public/categories.json')
      .then((res) => res.json())
      .then((dt) => setDatas(dt));
  }, []);
  return (
    <div className="my-40 mx-auto w-11/12">
      <div className="text-center space-y-5 mb-10">
        <h1 className="text-5xl font-extrabold">Job Catagory</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {datas.map((data) => (
          <div key={data.id} className="bg-[#9873FF1A] p-10 rounded-xl">
            <img className="mb-10" src={data.logo} alt="" />
            <h1 className="mb-3 text-xl font-bold">{data.category_name}</h1>
            <p className="text-gray-500">{data.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCatagory;
