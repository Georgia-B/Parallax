import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	title: PropTypes.string,
};

const Header = ({ title }) => {
	const titleElement = title ? <h2>{title}</h2> : null;

	return (
		<section>
			<div>
				{titleElement}
			</div>
		</section>
	);
};

Header.propTypes = propTypes;

export default Header;
