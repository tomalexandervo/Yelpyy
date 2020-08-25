import React from 'react';
import {Spin, Alert  } from 'antd';





const Landing = () => {
    return ( 

<div>



 <Spin tip="Loading...">
    <Alert
      message="Please allow location for this app to function correctly."
      description="Thank you."
      type="info"
    />
  </Spin> 

</div>

     );
}
 
export default Landing;