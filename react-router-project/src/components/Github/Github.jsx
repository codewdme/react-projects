import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/hiteshchoudhary`)
  //       .then((res) => res.json)
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className={data ? "flex justify-center items-center p-24 " : "hidden"}>
      <div className="w-1/3">
        <img className="rounded-full w-1/2" src={data?.avatar_url} alt="" />
      </div>

      <div className="w-2/3">
        <p>Github Name: {data?.name}</p>
        <p>Github Followers : {data?.followers}</p>
      </div>
    </div>
  );
};

export const getUserGithubInfo = async () => {
  const data = await fetch(`https://api.github.com/users/hiteshchoudhary`).then(
    (res) => res.json()
  );

  console.log(data);
  return data;
};

export default Github;
