import React from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Loader() {
  return <Spinner type="TailSpin" color="#00BFFF" height={60} width={60} />;
}
