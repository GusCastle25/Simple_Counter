import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return (
    <>
    <h1>SecondsCounter</h1>
	<div className="row" style={{backgroundColor:'blue', color: 'white', fontSize:'1000 px', fontWeight:'bold', padding: 50}}>
		<div className="col-6">
		<img src="https://png.pngtree.com/png-vector/20190224/ourmid/pngtree-vector-watch-icon-png-image_701278.jpg" width='150px'/>
			</div>
		<div className="col-1">{props.digitSix}</div>
		<div className="col-1">{props.digitFive}</div>
		<div className="col-1">{props.digitFour}</div>
		<div className="col-1">{props.digitThree}</div>
		<div className="col-1">{props.digitTwo}</div>
		<div className="col-1">{props.digitOne}</div>
	</div>
    </>
	);
};

export default SecondsCounter;