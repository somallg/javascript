import React from 'react';
import { connect } from 'react-redux';

import TributeImage from './tribute_image';
import TributeBody from './tribute_body';
import TributeFooter from './tribute_footer';

const TributeDetail = (props) => {
  return (
    <div className="jumbotron">
      <h1 className="text-center">{props.name}</h1>
      <h1 className="text-center"><em>{props.title}</em></h1>

      <TributeImage image={props.image}/>
      <TributeBody body={props.body}/>
      <TributeFooter footer={props.footer}/>
    </div>
  )
};

export default connect(({ data }) => data)(TributeDetail);
