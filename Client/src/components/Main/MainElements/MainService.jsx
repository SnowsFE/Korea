import React from "react";
import "./MainService.css";
import MainServiceItem from "./MainServiceItem";
import MainServiceData from "./MainServiceData";


 function Main_Service() {

	return (
		<section className="Main_Service">
            <h2>주요서비스</h2>
			<div>
				{MainServiceData.map((data) => (
					<MainServiceItem key={data.id} data={data} />
				))}
			</div>
		</section>
	);
};

export default Main_Service;