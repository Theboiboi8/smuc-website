import React from "react";
import { Modal } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Row } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { ThemeTooltip } from "./tooltip-theme-changer";
import { ThemeChanger } from "./themes-changer";

 export const ThemeModal = () => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log('closed');
    };
    return (
    <div>
        <Button className=" bg-gray-700 items-center " onClick={handler}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            Theme
        </Button>
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            blur
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                Change Theme
                </Text>
            </Modal.Header>
            <Modal.Body className=" items-center">
                <ThemeChanger />
            </Modal.Body>
            <Modal.Footer>
                <Text className=" items-center">
                    Powered By NextUI
                </Text>
            </Modal.Footer>
        </Modal>
    </div>
    )  
}