import currentState from './GlobalState';
import { updateState } from './fileStruct';
import HexBoard from "./HexBoard";
const UpdateHexIcon = (propID) => {
    document.onmousemove = null;
    document.onmousedown = null;
    updateStateOnClick(propID);
    switch (currentState.addableNode()) {
        case 'start-node':
            updateNode(propID, 'start-node');
            NodeHoverAnimation(propID);
            break;
        case 'end-node':
            updateNode(propID, 'end-node');
            NodeHoverAnimation(propID);
            break;
        case 'bomb-node':
            NodeHoverAnimation(propID);
            if (document.getElementById(propID).classList.contains('bomb-node'))
                removeOnClick(propID, 'bomb-node');
            else
                updateNode(propID, 'bomb-node');
            break;
        case 'weight-node':
            NodeHoverAnimation(propID);
            if (document.getElementById(propID).classList.contains('weight-node'))
                removeOnClick(propID, 'weight-node');
            else
                MultiNodeUpdate(propID, 'weight-node', ['no-node']);
            break;
        case 'wall-node':
            NodeHoverAnimation(propID);
            if (document.getElementById(propID).classList.contains('wall-node'))
                removeOnClick(propID, 'wall-node');
            else
                MultiNodeUpdate(propID, 'wall-node', ['no-node', 'icon']);
            break;
        default:
            break;
    }
};
const MultiNodeUpdate = (propID, node, toRemove) => {
    document.onmousemove = null;
    document.onmousedown = null;
    if (document.getElementById(propID).classList.contains('no-node')) {
        document.getElementById(propID).classList.remove('no-node');
        document.getElementById(propID).classList.add(node);
        let svgID = propID.replace('props', 'svg');
        toRemove.forEach(element => document.getElementById(svgID).classList.remove(element));
        document.getElementById(svgID).classList.add(node);
        document.onmousedown = () => {
            document.onmousemove = (e) => {
                if (e.buttons === 1) {
                    let svg = e.target;
                    if (svg.id.startsWith('svg')) {
                        let SVG_ID = svg.id;
                        let HoverPropsID = svg.id.replace('svg', 'props');
                        if (document.getElementById(HoverPropsID).classList.contains('no-node')) {
                            toRemove.forEach(element => document.getElementById(SVG_ID).classList.remove(element));
                            document.getElementById(SVG_ID).classList.add(node);
                            document.getElementById(HoverPropsID).classList.remove('no-node');
                            document.getElementById(HoverPropsID).classList.add(node);
                            NodeHoverAnimation(HoverPropsID);
                        }
                    }
                }
            };
        };
    }
};
const updateNode = (propID, node) => {
    if (document.getElementById(propID).classList.contains('no-node')) {
        let files = document.querySelectorAll(`.${node}`);
        for (let i = 0; i < files.length; i++) {
            const ele = files[i];
            ele.classList.remove(node);
            ele.classList.add('no-node');
        }
        document.getElementById(propID).classList.remove('no-node');
        document.getElementById(propID).classList.add(node);
    }
};
const updateStateOnClick = (propID) => {
    document.onmousemove = null;
    document.onmousedown = null;
    let ele = document.getElementById(propID);
    if (ele.classList.contains('start-node'))
        updateState('.io-file', 'io-1', 'startNode.io');
    else if (ele.classList.contains('end-node'))
        updateState('.io-file', 'io-2', 'endNode.io');
    else if (ele.classList.contains('bomb-node'))
        updateState('.io-file', 'io-3', 'bombNode.io');
    else if (ele.classList.contains('weight-node'))
        updateState('.io-file', 'io-4', 'weightNode.io');
    else if (ele.classList.contains('wall-node'))
        updateState('.io-file', 'io-5', 'wallNode.io');
};
const removeOnClick = (propID, nodeClass) => {
    document.getElementById(propID).classList.remove(nodeClass, 'node-hover');
    document.getElementById(propID).classList.add('no-node');
    if (nodeClass === 'wall-node' || nodeClass === 'weight-node') {
        let svgID = propID.replace('props', 'svg');
        document.getElementById(svgID).classList.remove(nodeClass);
        document.getElementById(svgID).classList.add('no-node', 'icon');
    }
};
const NodeHoverAnimation = (propID) => {
    let files = document.querySelectorAll('.node-hover');
    for (let i = 0; i < files.length; i++) {
        const ele = files[i];
        ele.classList.remove('node-hover');
    }
    files = document.querySelectorAll(`#${propID}`);
    for (let i = 0; i < files.length; i++) {
        const ele = files[i];
        ele.classList.add('node-hover');
    }
};
const SetInitialNodes = () => {
    for (let i = 0; i < HexBoard.idVar; i++) {
        if (i === (HexBoard.rows * 3)) {
            setTimeout(() => {
                document.getElementById(`props-${Math.floor((HexBoard.rows * HexBoard.cols) * 0.25)}`).classList.remove('no-node');
                document.getElementById(`props-${Math.floor((HexBoard.rows * HexBoard.cols) * 0.25)}`).classList.add('start-node');
                document.getElementById(`props-${Math.floor((HexBoard.rows * HexBoard.cols) * 0.75)}`).classList.add('end-node');
                document.getElementById(`props-${Math.floor((HexBoard.rows * HexBoard.cols) * 0.75)}`).classList.remove('no-node');
            }, 1);
        }
    }
};
export { UpdateHexIcon, SetInitialNodes, };