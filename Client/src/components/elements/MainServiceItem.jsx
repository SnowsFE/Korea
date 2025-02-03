import React from "react";

const MainServiceItem = ({ data }) => {
    return(
		<a href="www.naver.com">
			<img src={data.image} alt={`서비스${data.id}`} />
			<h3>{data.title}</h3>
			<span>{data.content}</span>
		</a>
    );
};

export default MainServiceItem;