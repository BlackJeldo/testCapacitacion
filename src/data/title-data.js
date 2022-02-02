import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import TitleContext from '../context/title-context';

const reducer = (data, action) => {
  return {
    ...data,
    title: action.title,
  };
};

const TitleData = ({ children }) => {
  const [data, dispatchData] = useReducer(reducer, {
    title: '',
  });
  return (
    <TitleContext.Provider value={{ data, dispatchData }}>
      {children}
    </TitleContext.Provider>
  );
};

TitleData.propTypes = { children: PropTypes.node };
export default TitleData;
