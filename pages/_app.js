import '../styles/globals.css'
import { createTheme, NextUIProvider } from "@nextui-org/react"
import useDarkMode from 'use-dark-mode'
import {Navbar} from "../components/Navbar";
import Script from "next/script";

const lightTheme = createTheme({
	type: 'light',
	className: 'light', // customize the class that enables this theme, `light-theme` by default
	theme: {
		fonts: {
			sans: "Inter, -apple-system, BlinkMacSystemFont, 'Dongle',"
		}
	}
})

const darkTheme = createTheme({
	type: 'dark',
	className: 'dark', // customize the class that enables this theme, `dark-theme` by default
	theme: {
		colors: {
			background: '#323744',
			primaryDark: '#323744',
			link: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
		},
		fonts: {
			sans: "Inter, -apple-system, BlinkMacSystemFont, 'Dongle',"
		}
	}
})

function MyApp({ Component, pageProps }) {
	const darkMode = useDarkMode(true, {
		classNameDark: 'dark',
		classNameLight: 'light',
	});

	return (
		<NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
			<Script type="module"
			        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
			<Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
			<Navbar />
			<div className='flex-auto pt-16'>
				<Component {...pageProps} />
			</div>
		</NextUIProvider>
	);
}

export default MyApp /* Do Not Remove!!! */