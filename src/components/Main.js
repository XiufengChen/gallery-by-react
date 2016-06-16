require('normalize.css/normalize.css');
require('styles/App.scss');

let imageDatas = require('../data/imageDatas.json');
import React from 'react';

function genImageURL(imageDatasArr){
	for (let i = 0, j = imageDatasArr.length; i < j; i++) {
		let singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
}

imageDatas = genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
		<section className="stage">
			<section className="img-sec">
			</section>
			<nav className="controller-nav">
			</nav>
		</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
