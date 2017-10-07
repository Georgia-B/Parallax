import React, { Component } from 'react';
import Layer from './layer';
import './parallax.css';

class LayerContainer extends Component {
    render() {
        return (
            <div className="parallax-container">
                <Layer key={0} ref={ref => (this.layer0 = ref)} className='parallax-layer layer-0' speed={0.05} maxScroll={565} />
                <Layer key={1} ref={ref => (this.layer1 = ref)} className='parallax-layer layer-1' speed={0.1} maxScroll={565} />
                <Layer key={2} ref={ref => (this.layer2 = ref)} className='parallax-layer layer-2' speed={0.3} maxScroll={565} />
                <Layer key={3} ref={ref => (this.layer3 = ref)} className='parallax-layer layer-3' speed={0.5} maxScroll={565} />
                <Layer key={4} ref={ref => (this.layer4 = ref)} className='parallax-layer layer-4' speed={0.7} maxScroll={565} />
                <Layer key={5} ref={ref => (this.layer5 = ref)} className='parallax-layer layer-5' speed={0.9} maxScroll={565} />
                <Layer key={6} ref={ref => (this.layer6 = ref)} className='parallax-layer layer-6' speed={1.2} maxScroll={565} />
            </div>
        )
    }
}

export default LayerContainer;