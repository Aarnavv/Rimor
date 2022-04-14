import React from 'react';
import '../css/navbar.css';
import { BATIcon, BOMBNode, ENDNode, IOIcon, MDIcon, SHORTESTPATHNode, STARTNode, SYSIcon, TSXIcon, UNVISITEDNode, VISITEDNode, WALLNode, WEIGHTNode } from "../svgIcons/fileSVGIconComponent";
import { changeAddableNode, changeAlgorithm, changeMaze, changeSpeed, FILE_BG, FILE_BG_SELECTED, FILE_BORDER } from "./GlobalState";
import { AlgoType, MazeType, NodeType, SpeedType } from "./Types";
export const updateState = (divClass, id, text) => {
    let files = document.querySelectorAll(divClass);
    for (let i = 0; i < files.length; i++) {
        const ele = files[i];
        ele.style.backgroundColor = FILE_BG;
        ele.style.borderLeft = "";
    }
    document.getElementById(id).style.backgroundColor = FILE_BG_SELECTED;
    document.getElementById(id).style.borderLeft = `2.5px solid ${FILE_BORDER}`;
    let ext = text.substring(text.lastIndexOf(".") + 1);
    let textAdd = text.substring(0, text.lastIndexOf("."));
    switch (ext) {
        case "tsx":
            changeAlgorithm(AlgoType[textAdd]);
            break;
        case "io":
            changeAddableNode(NodeType[textAdd]);
            break;
        case "bat":
            changeMaze(MazeType[textAdd]);
            break;
        case "sys":
            changeSpeed(parseInt(SpeedType[`percent${text.substring(0, text.indexOf('p'))}`]));
            break;
        default:
            return;
    }
    NodeAnimation(textAdd);
};
const NodeAnimation = (nodeType) => {
    let files = document.querySelectorAll('.node-hover');
    for (let i = 0; i < files.length; i++) {
        const ele = files[i];
        ele.classList.remove('node-hover');
    }
    switch (nodeType) {
        case 'startNode':
            document.querySelector('.start-node').classList.add('node-hover');
            break;
        case 'endNode':
            document.querySelector('.end-node').classList.add('node-hover');
            break;
        case 'bombNode':
            if (document.querySelector('.bomb-node'))
                document.querySelector('.bomb-node').classList.add('node-hover');
            break;
        case 'weightNode':
            if (document.querySelector('.weight-node')) {
                let files = document.querySelectorAll('.weight-node');
                for (let i = 0; i < files.length; i++) {
                    const ele = files[i];
                    ele.classList.add('node-hover');
                }
            }
            break;
        default:
            break;
    }
};
export function TSXFile(props) {
    return (React.createElement("div", { className: props.divClassName, id: props.divID, onClick: () => updateState('.tsx-file', props.divID, props.text) },
        React.createElement(TSXIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function IOFile(props) {
    return (React.createElement("div", { className: props.divClassName, id: props.divID, onClick: () => updateState('.io-file', props.divID, props.text) },
        React.createElement(IOIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function BATFile(props) {
    return (React.createElement("div", { className: props.divClassName, id: props.divID, onClick: () => updateState('.bat-file', props.divID, props.text) },
        React.createElement(BATIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function SYSFile(props) {
    return (React.createElement("div", { className: props.divClassName, id: props.divID, onClick: () => updateState('.sys-file', props.divID, props.text) },
        React.createElement(SYSIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function MDFile(props) {
    return (React.createElement("div", { className: props.divClassName, id: props.divID },
        React.createElement(MDIcon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
export function GUIFile(props) {
    function Icon() {
        switch (props.type) {
            case 'bomb': return React.createElement(BOMBNode, null);
            case 'shortest-path': return React.createElement(SHORTESTPATHNode, null);
            case 'wall': return React.createElement(WALLNode, null);
            case 'visited': return React.createElement(VISITEDNode, null);
            case 'unvisited': return React.createElement(UNVISITEDNode, null);
            case 'start-node': return React.createElement(STARTNode, null);
            case 'end-node': return React.createElement(ENDNode, null);
            case 'weight': return React.createElement(WEIGHTNode, null);
        }
    }
    return (React.createElement("div", { className: props.divClassName, id: props.divID },
        React.createElement(Icon, null),
        React.createElement("p", { className: props.pClassName }, props.text)));
}
