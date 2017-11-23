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

		return (
		<div className="App">
			<LayerContainer ref={(r) => this.container = r}/>
			<div className="content">
				<div className={headerClass}>
					<h1>Parallax Mountains</h1>
				</div>
				<div className="content-section">
					<div className="paragraphs">
					Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.<br/><br/>
					Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.<br/><br/>
					</div>
				</div>
				<div className="second-parallax">
					<div className="text">Trees</div>
				</div>
				<div className="content-section">
					<div className="paragraphs">				
						Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?<br/> <br/>
						Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.
					</div>
				</div>
				<div className="third-parallax">
					<div className="text">Mountains</div>
				</div>
				<div className="content-section">
					<div className="paragraphs">
					Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.<br/> <br/>
					Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default App;
