import { MazeType, SpeedType } from "./Types";
import Graph from "./Graph";
let currentAddableNode = null;
let currentAlgorithm = null;
let currentMaze = MazeType.none;
let currentSpeed = SpeedType.percent100;
function changeAddableNode(toThis) {
    currentAddableNode = toThis;
}
function changeAlgorithm(toThis) {
    currentAlgorithm = toThis;
}
function changeMaze(toThis) {
    currentMaze = toThis;
}
function changeSpeed(toThis) {
    currentSpeed = toThis;
}
const SOLID_RED = "#EF5350";
const LIGHT_RED = "#D5756C";
const BLUE = "#67BBFF";
const GREEN = "#4CAF50";
const YELLOW = "#E5C07B";
const FILE_BG = "#21252B";
const FILE_BG_SELECTED = "#4b4e5578";
const FILE_BORDER = "#67bbff";
const GRAPH = new Graph((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
});
export { currentAddableNode, changeAddableNode, currentAlgorithm, changeAlgorithm, currentMaze, changeMaze, currentSpeed, changeSpeed, SOLID_RED, LIGHT_RED, BLUE, GREEN, YELLOW, FILE_BG, FILE_BG_SELECTED, FILE_BORDER, GRAPH };
