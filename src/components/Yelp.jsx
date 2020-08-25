import React from 'react';
import { useQuery } from 'react-query';
import YelpCard from './YelpCard';
import {usePosition} from 'use-position'
import { PageHeader    } from 'antd';
import Landing from "./Landing"



const apiKey = "wujl3fZZXuv7BMG2loLbI9EJnP9hedCNEWQ1Prq0hPgXWvCsYBnZGuLemFYCZ5Jt7EcjFv1JvPyt3sbvYostduJG4pEqhBqZ8htygfmfjIrlg6ZyNiCxq-zEikI7X3Yx";







// https://api.yelp.com/v3/businesses/search?open_now=true&latitude={latitude}&longitude={longitude}


const fetchYelp = async (key, lat, long) => {

const lati = lat.toString();
const longi = long.toString();

const latlong = `&latitude=${lati}&longitude=${longi}&limit=18&sort_by=best_match`


    const queryURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?open_now=true' + latlong;
    
    const res = await fetch(queryURL, { 
        method: 'GET',
        dataType: 'json', 
        headers: { "Authorization": `Bearer ${apiKey}` }});
        
       
    return res.json();

  }



//FUNCTION
const Yelp = () => {

const {latitude, longitude} = usePosition();
const {data, status} = useQuery(['businesses', latitude, longitude], fetchYelp )

    

    return (
    <div class=' font-sans'>


<div class='text-align-center'>

<PageHeader
    className="site-page-header"
    title={<h1 class='text-2xl'> Yelpyy </h1>}
    subTitle="Hungry? Here. "

  /></div>

{status === 'loading' &&(



<Landing/>



     
     
     
     )}
{status === 'error' &&(  <div>Error fetching data...</div>)}


{status === 'success' &&(

 <div className="contents">
        <div class="lg:grid grid-cols-4 gap-3 sm:flex-col">

            {data.businesses.map(business => 
        
        <YelpCard key={business.id} business={business}/>

        )}
        </div>
 </div> 

    )}
    </div>
) }

        











 
export default Yelp

