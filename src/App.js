import React, { Component } from 'react';
import './App.css';
import LayerContainer from './components/layerContainer';

class App extends Component {
	constructor() {
		super();
		this.setTimer = this.setTimer.bind(this);
		this.state = {
			sticky: false,
			scroll: false
		};
	}

	componentDidMount() {
		this.setTimer();
		window.addEventListener("scroll", this.onScroll.bind(this));
	}

	setTimer() {
		if (!this.timer) {
			this.timer = setInterval(() => {
				if (this.state.scroll) {
					var scrollY = Math.max(window.pageYOffset, 0);
					var width = window.innerWidth;
					this.container.update(scrollY);
					const sticky = (width > 600 && scrollY >= 1050) || (width <= 600 && scrollY >= 850);
					this.setState({
						sticky,
						scroll: false
					});
				}
			}, 10);
		}
	}

	onScroll() {
		window.requestAnimationFrame(this.scrollHandler.bind(this));
	}

	scrollHandler() {
		this.setState({
			scroll: true
		});
	}

	render() {
		const headerClass = this.state.sticky ? "header stickyHeader" : "header";
		const contentClass = this.state.sticky ? "content stickyContent" : "content";

		return (
		<div className="App">
			<LayerContainer ref={(r) => this.container = r}/>
			<div className="main">
				<div className={headerClass}>
					<div>Parallax demo</div>
				</div>
				<div className={contentClass}>
					<div className="paragraphs">
						<div className="paragraph-title">What is parallax scrolling?</div>
						Parallax scrolling is an effect where the percieved position of an object appears different depending on the angle at which it is viewed.
						This is an effect which is commonly used in web design to give the appearance of depth between layers, often that the foreground moves faster than the background.
					</div>
				</div>
				<div className="second-parallax">
					<div className="text">Trees</div>
				</div>
				<div className="content">
					<div className="paragraphs">				
						Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?
					</div>
				</div>
				<div className="third-parallax">
					<div className="text">Mountains</div>
				</div>
				<div className="content">
					<div className="paragraphs">
					Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default App;
