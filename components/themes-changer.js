import { Button, Tooltip } from "@nextui-org/react";
import { Switch, useTheme } from '@nextui-org/react'
import useDarkMode from "use-dark-mode";
import { SunIcon } from "./sun-svg";
import { MoonIcon } from "./moon-svg";

export const ThemeChanger = () => {
	const darkMode = useDarkMode(false);
	const { type, isDark } = useTheme();

	return (
		<div>
			<Button.Group color="#323744" className=' rounded'>
				<Tooltip content={'Change The Theme'} placement="bottom" enterDelay={1000}>
					<Switch shadow color="warning"
					        initialChecked={darkMode.value}
					        onChange={() => darkMode.toggle()}
					        iconOff={<SunIcon />}
					        iconOn={<MoonIcon />}
					/>
				</Tooltip>
			</Button.Group>
		</div>
	)
}