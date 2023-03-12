import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
  const friendsDetails = useLoaderData();
  const {name,id,email} = friendsDetails;
  console.log(friendsDetails);
  return (
    <div>
      
      <h2>{name}</h2>
      <p>id: {id}</p>
      <p>email : {email}</p>
    </div>
  );
};

export default FriendsDetails;