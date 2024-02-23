'use strict';
define(['react',
	'react-dom'], function (React, ReactDOM) {
		'use strict';


		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString); // use this to access any url query string parameters

		let Hero = ({ color, backgroundImage, bg, bgOpacity }) => {
			return <img class="background-img" src={backgroundImage} />;
		}

		let Heading = ({children}) => {
			return <h1 style={{'margin-bottom': '2em'}}>{children}</h1>
		}

		let Wrapper = ({children}) => {
			return <div style={{width: '100%', padding: '5em'}}>{children}</div>
		}

		let App = () => {

			const user = getUser();
			console.log(user)

			let userFullName = user.defaultName;

			return <>
				<Hero backgroundImage="v1/ext/Quick_Perspective/headerBackground.png" />
				<Wrapper>	
					<Heading>Custom Perspective Quick-Start Template</Heading>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui nisl, ultrices in tempor vel, viverra sed tortor. Donec sodales augue sit amet orci porttitor fringilla. Maecenas libero mauris, hendrerit in varius ut, condimentum vitae eros. Ut ac blandit ante. Phasellus id enim quis magna posuere vulputate. Sed vitae convallis felis. Nullam luctus molestie felis, in cursus orci. Nam at orci sed libero rutrum mattis tempus quis nulla. Donec leo magna, laoreet nec vehicula non, tincidunt nec felis. In ut purus eu risus aliquet euismod sed vel orci. Pellentesque nec accumsan eros.<br/><br/>Nam tincidunt felis turpis. Duis placerat laoreet tortor, molestie tempus turpis tempor eu. Suspendisse in ipsum vel orci congue ultricies. Ut massa diam, dapibus quis pharetra non, consectetur vel dolor. Sed in blandit nisi. Ut in ante vel mi consectetur ultrices nec ut lectus. Pellentesque lacinia, nulla quis placerat elementum, magna nisl vulputate lorem, et ultrices sapien nulla cursus odio. Nullam quis ullamcorper est, ac gravida nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget elementum purus. Nullam vestibulum efficitur libero, et dictum odio lobortis quis. Vivamus auctor vel enim quis venenatis.</p>
					<button onClick={async () => {
						alert("Button is working!")

					}}>Check it out!</button>
				</Wrapper>
			</>;
		}

		var ContentView = function ContentView() {
			this.open = function (context, options) {
				this.logger = console;
				const root = document.createElement('div');
				root.classList.add('quickApp');
				const view = React.createElement(App, {});
				this._dropDown = ReactDOM.render(view, root);
				return Promise.resolve(root);
			};

			this.close = function () {
				this.logger.info('close');
			};

			this.onShow = function () {
				this.logger.info('onShow');
			};

			this.onHide = function () {
				this.logger.info('onHide');
			};

			this.getDisplayInfo = function () {
				this.logger.info('getDisplayInfo');
				return {
					'title': 'Quick Perspective', //this.options.info.title,
					'icon': 'v1/ext/Quick_Perspective/icon.png'
				};
			};
		};

		return ContentView;
	});

const getUser = () => {
	let userFullName = window.inlineContext.userAccount.defaultName;
	
	return {
		userName:window.inlineContext.userAccount.userName,
		defaultName: userFullName
	}

}
