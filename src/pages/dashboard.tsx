import React from 'react';
import { useGetUserQuery } from "../store/user";

const Dashboard: React.FC<{}> = () => {
  const { data, isLoading, isError, error, isSuccess } = useGetUserQuery();

  if (isLoading) {
    return <div>Please wait...</div>
  }

  if (isError) {
    return <div>There was an error!</div>
  }

  return <div>
    {data?.firstName}, welcome to the dashboard!
    <div>
      {data?.roles.map((role) => {
        return <div>{role.name}</div>;
      })}
    </div>
  </div>;
};

export default Dashboard;
