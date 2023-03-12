import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
  const {id,name,username,email,phone} = friend;
  //console.log(name);
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>details: <Link to={`/friend/${id}`}>{username}</Link></p>
    </div>
  );
};

export default Friend;