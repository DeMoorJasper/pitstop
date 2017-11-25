import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './styles/header.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Pitstop</h1>
			</header>
		);
	}
}