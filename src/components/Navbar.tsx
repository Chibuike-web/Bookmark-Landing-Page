import LogoColor from "../assets/logo-bookmark.svg";
import LogoWhite from "../assets/logo-bookmark-white.svg";
import { CancelIcon, FacebookIcon, HamburgerIcon, TwitterIcon } from "./Icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useMobileNavState } from "../store/mobileNavState";
import { Button } from "./Button";

export default function Navbar() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { isOpen, openNav, closeNav } = useMobileNavState();

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<>
			{windowWidth > 900 ? (
				<StyledNav>
					<img src={LogoColor} alt="Logo Bookmark" />
					<NavContent>
						<ListContainer>
							<li>FEATURES</li>
							<li>PRICING</li>
							<li>CONTACT</li>
						</ListContainer>
						<NavButton type="button">LOGIN</NavButton>
					</NavContent>
				</StyledNav>
			) : (
				<>
					{!isOpen ? (
						<MobileNavContainer>
							<img src={LogoColor} alt="Logo Bookmark" />
							<button type="button" onClick={openNav}>
								<HamburgerIcon />
							</button>
						</MobileNavContainer>
					) : (
						<MobileNav closeNav={closeNav} />
					)}
				</>
			)}
		</>
	);
}

// Desktop
const StyledNav = styled.nav`
	margin-inline: auto;
	max-inline-size: 68.75rem;
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	padding-block: 3rem;
`;

const NavContent = styled.menu`
	display: flex;
	align-items: center;
	gap: 2.875rem;
`;

// List
const ListContainer = styled.ul`
	display: flex;
	gap: 2.875rem;

	li {
		list-style: none;
		letter-spacing: 0.15em;
		font-weight: 400;
		cursor: pointer;
		transition: color 0.3s ease;
		color: var(--verydarkblue);

		&:hover {
			color: var(--red);
		}
	}
`;

// Button
const NavButton = styled(Button)`
	letter-spacing: 0.17em;
	background-color: var(--red);
	color: white;

	&:hover {
		border: 0.125rem solid var(--red);
		background: transparent;
		color: var(--red);
	}
`;

// Mobile Navbar
const MobileNavContainer = styled.nav`
	padding-block: 2.5rem;
	padding-inline: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

interface MobileNavState {
	closeNav: () => void;
}

const MobileNav = ({ closeNav }: MobileNavState) => {
	return (
		<Overlay onClick={closeNav}>
			<MobileNavContainer>
				<img src={LogoWhite} alt="Logo Bookmark" onClick={(e) => e.stopPropagation()} />
				<button type="button" onClick={closeNav}>
					<CancelIcon />
				</button>
			</MobileNavContainer>
			<MobileNavContent onClick={(e) => e.stopPropagation()}>
				<ul>
					<li>FEATURES</li>
					<li>PRICING</li>
					<li>CONTACT</li>
				</ul>
				<button type="button">LOGIN</button>
			</MobileNavContent>
			<SocialIcons>
				<FacebookIcon />
				<TwitterIcon />
			</SocialIcons>
		</Overlay>
	);
};

const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background-color: hsla(229, 31%, 21%, 0.8);
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const MobileNavContent = styled.menu`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-inline: 1.5rem;
	gap: 2rem;
	width: 100%;

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		width: 100%;

		li {
			list-style: none;
			letter-spacing: 0.2em;
			font-weight: 500;
			padding-block: 1.5rem;
			border-block: 1px solid rgba(255, 255, 255, 0.25);
			width: 100%;
			text-align: center;
		}
	}

	button {
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: 0.17em;
		width: 100%;
		color: var(--white);
		padding-inline: 1.5rem;
		padding-block: 0.9rem;
		border-radius: 0.375rem;
		border: 1px solid white;
	}
`;

const SocialIcons = styled.div`
	margin-top: auto;
	padding-block: 3rem;
	display: flex;
	gap: 2rem;
	align-items: center;
`;
