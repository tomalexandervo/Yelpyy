import React from 'react';
import { Card } from 'antd';
import { PlusSquareTwoTone} from '@ant-design/icons';

const { Meta } = Card;

const YelpCard = ({business}) => {




    return ( 
    <div>
  
           



 





<a href={business.url} target="_blank" rel="noopener noreferrer">
  
<Card class="flex p-4"
    hoverable
    style={{ width: 400 }}
    cover={
      <img class=" h-64 w-full object-cover relative"
        alt="Yelp provided picture"
        src={business.image_url}
      />
    }
    actions={[

  <PlusSquareTwoTone twoToneColor="#d32323" key='plussquare2' /> 

    ]}
  >
    <Meta
      title={business.name}
      description={business.location.address1}
    />
  </Card>

  
  </a>    






        </div>
     );
}
 
export default YelpCard;