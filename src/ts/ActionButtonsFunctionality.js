import Algorithms from "./Algorithms";
import currentState from "./GlobalState";
import { updateBiDirectionalVisitedNodes, updateRandomVisitedNodes, updateVisitedNodes, unUpdateNodes } from "./HexBoardAlgoRunUpdate";
import { setInitialNodes } from "./HexBoardUpdate";
import Graph from "./Graph";
/**
 * Sets the hex board to its default initial state when the Stop button is clicked.
 * Requires no parameters.
 * @return void
 */
const StopButtonClick = () => {
    if (currentState.run() === true)
        currentState.changeRun();
    document.getElementById('stop-button').classList.add('button-clicked');
    RemoveAllClasses(500, ['start-node', 'end-node', 'wall-node', 'weight-node', 'bomb-node']);
    currentState.changeBombNode(null);
    Graph.copy(currentState.initGraph(), currentState.graph(), 1);
    setTimeout(() => {
        document.getElementById('stop-button').classList.remove('button-clicked');
        setInitialNodes();
    }, 510);
};
/**
 * Removes all the nodes of a certain type from the board.
 * @param node The class of the node type that has to be removed from the board.
 * @return void
 */
const RemoveAllNodes = (node) => {
    let nodes = document.querySelectorAll(`.${node}`);
    let svgNode = document.querySelectorAll(`.svg-${node}`);
    for (let i = 0; i < nodes.length; i++) {
        const ele = nodes[i];
        ele.classList.remove(node);
        ele.classList.remove('node-hover');
        ele.classList.add('no-node');
        const svgEle = svgNode[i];
        svgEle.classList.remove(`svg-${node}`);
        svgEle.classList.add('no-node', 'icon');
    }
};
let pathToRemove = [];
let pathToRemoveRandom = new Set();
let visitedToRemove = [];
let visitedToRemoveBomb = [];
let bomb = false;
const StartButtonClick = (currentNode) => {
    if (currentState.run()) {
        if (currentState.algorithm() === null)
            alert('Please select an algorithm before continuing!');
        else if (currentState.algorithm() === 'bd-algo') {
            const [pathFromStart, visitedFromStartSet, visitedFromEndSet] = new Algorithms(currentState.graph()).biDirectional(currentState.startNode(), currentState.endNode());
            const visitedFromStartArray = Array.from(visitedFromStartSet);
            const visitedFromEndArray = Array.from(visitedFromEndSet);
            pathToRemove = pathFromStart;
            visitedToRemove = visitedFromStartArray.concat(visitedFromEndArray);
            if (visitedFromStartArray.length > visitedFromEndArray.length) {
                updateBiDirectionalVisitedNodes(visitedFromStartArray, pathFromStart, true, 0);
                updateBiDirectionalVisitedNodes(visitedFromEndArray, pathFromStart, false, 0);
            }
            else {
                updateBiDirectionalVisitedNodes(visitedFromStartArray, pathFromStart, false, 0);
                updateBiDirectionalVisitedNodes(visitedFromEndArray, pathFromStart, true, 0);
            }
        }
        else if (currentState.algorithm() === 'rand-algo') {
            let endNode = currentState.endNode();
            setTimeout(() => {
                updateRandomVisitedNodes(currentNode.getData());
                let oldNode = currentNode;
                currentNode = currentNode.getRandomNeighbour();
                pathToRemoveRandom.add(currentNode.getData());
                if (currentNode === oldNode) {
                    alert("No Path Found! :(");
                    return;
                }
                else if (currentNode.getData() !== endNode)
                    StartButtonClick(currentNode);
                else if (currentNode.getData() === endNode)
                    updateRandomVisitedNodes(endNode);
            }, 10);
        }
        else {
            if (currentState.bombNode() === null) {
                let path = Algorithms.runAlgoFromGlobalStateNoBomb().path;
                let visitedInOrder = Algorithms.runAlgoFromGlobalStateNoBomb().visitedInOrder;
                let ids = Array.from(visitedInOrder.keys());
                pathToRemove = path;
                visitedToRemove = ids;
                updateVisitedNodes(ids, null, path, false, 0);
            }
            else {
                let path = Algorithms.runAlgorithmGlobalStateYesBomb().path;
                let visitedP1 = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP1;
                let visitedP2 = Algorithms.runAlgorithmGlobalStateYesBomb().visitedP2;
                let ids1 = Array.from(visitedP1.keys());
                let ids2 = Array.from(visitedP2.keys());
                // console.log(visitedP1, visitedP2, currentState.bombNode())
                pathToRemove = path;
                visitedToRemove = ids1;
                visitedToRemoveBomb = ids2;
                bomb = true;
                updateVisitedNodes(ids1, ids2, path, true, 0);
            }
        }
    }
};
const RemoveAllClasses = (time, opt) => {
    setTimeout(() => {
        RemoveAllNodes('path-node');
        RemoveAllNodes('visited-node');
        RemoveAllNodes('visited-node-bomb');
        RemoveAllNodes('un-path-node');
        RemoveAllNodes('un-visited-node');
        opt.forEach((x) => RemoveAllNodes(x));
        // if (!currentState.run()) currentState.changeRun();
    }, time);
};
const PrevButtonClick = () => {
    if (currentState.run() === true)
        currentState.changeRun();
    let visitedNodeTime;
    let pathNodeTime;
    let pathToRemoveLength;
    let visitedToRemoveLength;
    let visitedToRemoveBombLength;
    if (pathToRemove === null) {
        visitedNodeTime = 8;
        pathNodeTime = null;
        pathToRemoveLength = null;
        visitedToRemoveLength = visitedToRemove.length - 2;
        visitedToRemoveBombLength = visitedToRemoveBomb.length - 2;
    }
    else {
        if (pathToRemove.length === 0) {
            pathToRemoveRandom.forEach((id) => {
                pathToRemove.push(id);
            });
        }
        visitedNodeTime = 8;
        pathNodeTime = 50;
        pathToRemoveLength = pathToRemove.length - 1;
        visitedToRemoveLength = visitedToRemove.length - 2;
        visitedToRemoveBombLength = visitedToRemoveBomb.length - 2;
    }
    visitedToRemove.shift();
    if (!bomb) {
        unUpdateNodes(pathToRemove, pathToRemoveLength, pathNodeTime, pathNodeTime * 10, 'path-node', 'un-path-node', false);
        unUpdateNodes(visitedToRemove, visitedToRemoveLength, visitedNodeTime, visitedNodeTime * 10, 'visited-node', 'un-visited-node', true);
    }
    else if (bomb) {
        unUpdateNodes(pathToRemove, pathToRemoveLength, pathNodeTime, pathNodeTime * 10, 'path-node', 'un-path-node', false);
        unUpdateNodes(visitedToRemove, visitedToRemoveLength, visitedNodeTime, visitedNodeTime * 10, 'visited-node', 'un-visited-node', false);
        unUpdateNodes(visitedToRemoveBomb, visitedToRemoveBombLength, visitedNodeTime * 0.75, visitedNodeTime * 7.5, 'visited-node-bomb', 'un-visited-bomb-node', true);
    }
};
export { StopButtonClick, StartButtonClick, PrevButtonClick, RemoveAllClasses, };
