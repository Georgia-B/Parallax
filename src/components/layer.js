import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './parallax.css';

const propTypes = {
    speed: PropTypes.number.isRequired,
    maxScroll: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
}

class Layer extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.setYTransform = this.setYTransform.bind(this);
        this.state = {
            style: { }
        }
    }

    update(scrollY) {
        if (scrollY > this.props.maxScroll) { return; }
        var offset = -(scrollY * this.props.speed);
        this.setYTransform(offset);
    };

    setYTransform(val) {
        const style = {
            WebkitTransform: "translate3d(0, " + val + "px, 0)",
            MozTransform: "translate3d(0, " + val + "px, 0)",
            OTransform: "translate3d(0, " + val + "px, 0)",
            transform: "translate3d(0, " + val + "px, 0)",
            msTransform: "translateY(" + val + "px)"
        };
       this.setState({
           style
       });
    }

    render() {
        const {className, speed, maxScroll} = this.props;
        return (
            <div 
                className={className}
                style={this.state.style}
                data-parallax-speed={speed}
                data-max-scroll={maxScroll}
            ></div>
        );
    }
}

Layer.propTypes = propTypes;

export default Layer;