import React, { Component } from 'react';
import Layer from './layer';
import './parallax.css';

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
		if (scrollY >= 1050) {
			this.setState({
				maskStyle: {
					opacity: -scrollY/1500
				}
			});
			return;
		}
		this.setState({
			maskStyle: {
				opacity: scrollY/1500
			},
			layer0Style: {
				opacity: scrollY/900
			}
		});
	}

    render() {
		

        return (
			<div>
				<div className="parallax-container">
					<div className="layer-0-mask" style={this.state.layer0Style} />
					<Layer key={0} ref={ref => (this.layer0 = ref)} className='parallax-layer layer-0' speed={0.05} maxScroll={550} />
					<Layer key={12} ref={ref => (this.layer01 = ref)} className='parallax-layer layer-01' speed={0.5} maxScroll={800} />
					<Layer key={1} ref={ref => (this.layer1 = ref)} className='parallax-layer layer-1' speed={0.1} maxScroll={550} />
					<Layer key={2} ref={ref => (this.layer2 = ref)} className='parallax-layer layer-2' speed={0.3} maxScroll={550} />
					<Layer key={3} ref={ref => (this.layer3 = ref)} className='parallax-layer layer-3' speed={0.5} maxScroll={550} />
					<Layer key={4} ref={ref => (this.layer4 = ref)} className='parallax-layer layer-4' speed={0.8} maxScroll={550} />
					<Layer key={5} ref={ref => (this.layer5 = ref)} className='parallax-layer layer-5' speed={0.9} maxScroll={550} />
					<Layer key={6} ref={ref => (this.layer6 = ref)} className='parallax-layer layer-6' speed={1} maxScroll={550} />
				</div>
				<div className="parallax-mask" style={this.state.maskStyle} />
			</div>
        )
    }
}

export default LayerContainer;