import React, { Component } from 'react';
import Layer from './layer';

const layers = [
	{ id: 0, speed: 0.05, maxScroll: 550 },
	{ id: 1, speed: 0.5, maxScroll: 800 },
	{ id: 2, speed: 0.1, maxScroll: 550 },
	{ id: 3, speed: 0.3, maxScroll: 550 },
	{ id: 4, speed: 0.5, maxScroll: 550 },
	{ id: 5, speed: 0.8, maxScroll: 550 },
	{ id: 6, speed: 0.9, maxScroll: 550 },
	{ id: 7, speed: 1, maxScroll: 550 },
];

class LayerContainer extends Component {
	constructor(props) {
		super(props);
		this.update = this.update.bind(this);
		this.state = {
			maskStyle: { },
			layer0Style: { }
		}
	}

	update(scrollY) {
		layers.forEach(layer => this[`layer${layer.id}`].update(scrollY));
		const maskStyle = { opacity: -scrollY/1500 };
		let layer0Style = {};
		if (scrollY < 1050) {
			maskStyle.opacity = scrollY/1500;
			layer0Style.opacity = scrollY/900
		}
		this.setState({ maskStyle, layer0Style });
	}

    render() {
        return (
			<div>
				<div className="parallax-container">
					<div className="layer-0-mask" style={this.state.layer0Style} />
					{layers.map(layer =>
						<Layer key={layer.id} ref={ref => (this[`layer${layer.id}`] = ref)} className={`parallax-layer layer-${layer.id}`} speed={layer.speed} maxScroll={layer.maxScroll} />
					)}
				</div>
				<div className="parallax-mask" style={this.state.maskStyle} />
			</div>
        )
    }
}

export default LayerContainer;
