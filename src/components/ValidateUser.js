import React from 'react';
import User from './User';
import { useParams } from 'react-router-dom';
import { NotFound } from './NotFound';

function ValidateUser() {
  let params = useParams();
  let userId = params.id.match(/\d+/);
  if (!userId) {
    return <NotFound />;
  }
  return <User id={params.userId} />;
}

export default ValidateUser;
