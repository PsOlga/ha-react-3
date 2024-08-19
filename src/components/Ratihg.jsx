import { useState } from "react";

function Rating () {
const [ratingValue, setRatingValue] = useState(0);

const handleRatingClick = (value) => {
  setRatingValue(value);
  };

 const ratingList = [
    '/imgs/stars_24.png',
    './imgs/stars_2.png',
    './imgs/stars_3.png',
    './imgs/stars_4.png',
  ];


const style = {
    backgroundColor: 'rgb(204, 243, 243)', 
    borderRadius: '5px', 
    margin:'15px',
    border: 'solid 1px rgb(79, 122, 122)',
    color: 'rgb(55, 88, 88)',
    padding: '5px 10px',
  
}
return (
 <div style={{backgroundColor: 'rgb(204, 243, 243)', }}>
<div className="ratingDiv">
{ratingValue > 0 && (
    < img src={ratingList[ratingValue - 1]}
    aria-colcount={'Rating ${ratingValue}'}
    style={{width: '100px', height: 'auto'}}
    />
)}
  </div>
  <div className="btnsDiv" >
    <button onClick={() => handleRatingClick(1)} style={style}>Плохо</button>
    <button onClick={() => handleRatingClick(2)}style={style}>Приемлемо</button>
    <button onClick={() => handleRatingClick(3)} style={style}>Хорошо</button>
    <button onClick={() => handleRatingClick(4)} style={style}>Отлично</button>
  </div>


</div>
)
}
export default Rating;
