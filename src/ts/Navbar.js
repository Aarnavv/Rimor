import * as React from "react";
import '../css/navbar.css';
import { ProjectIcon } from '../svgIcons/projectSVGIconComponent';
import * as ActionIcons from '../svgIcons/actionButtons';
import { FolderComponent } from "./folderStruct";
import { TSXFile, IOFile, BATFile, SYSFile, MDFile, GUIFile } from "./fileStruct";
export default class Navbar extends React.Component {
    render() {
        return (React.createElement("div", { className: "navbar" },
            React.createElement("div", { className: "header" },
                React.createElement("div", { className: "title" }, "Vagus"),
                React.createElement("div", { className: "description" }, "{\"Latin\":\"wandering\",\"purpose\":\"algorithms\"}")),
            React.createElement("div", { className: "project" },
                React.createElement(ProjectIcon, null),
                React.createElement("p", { className: "project-title" }, "Project"),
                React.createElement("div", { className: "buttons" },
                    React.createElement(ActionIcons.StopButtonIcon, null),
                    React.createElement(ActionIcons.PrevButtonIcon, null),
                    React.createElement(ActionIcons.RunButtonIcon, null))),
            React.createElement("div", { className: "folder-panel" },
                React.createElement(FolderComponent, { colorOfFolder: "#EF5350", text: "Vagus-master", divClassName: "folder", arrowID: "vagus-master-arrow" },
                    React.createElement(FolderComponent, { colorOfFolder: "#EF5350", text: "advanced-control-panel", divClassName: "folder folder-drop", arrowID: "advanced-cp-arrow" },
                        React.createElement(FolderComponent, { colorOfFolder: "#D5756C", text: "algorithms", divClassName: "folder folder-drop", arrowID: "algorithms-arrow" },
                            React.createElement("div", { className: "folder-drop-inner" },
                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "aStarSearch.tsx", divID: "tsx-1" }),
                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "djikstrasSearch.tsx", divID: "tsx-2" }),
                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "bellmanFord.tsx", divID: "tsx-3" }),
                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "breadthFirstSearch.tsx", divID: "tsx-4" }),
                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "depthFirstSearch.tsx", divID: "tsx-5" }),
                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "biDirectionalSearch.tsx", divID: "tsx-6" }),
                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "floydWarshallSearch.tsx", divID: "tsx-7" }),
                                React.createElement(TSXFile, { divClassName: "file tsx-file", pClassName: "tsx-name file-name", text: "johnsonsAlgorithm.tsx", divID: "tsx-8" }))),
                        React.createElement(FolderComponent, { colorOfFolder: "#67BBFF", text: "addableNodes", divClassName: "folder folder-drop", arrowID: "addable-arrow" },
                            React.createElement("div", { className: "folder-drop-inner" },
                                React.createElement(IOFile, { divClassName: "file io-file", pClassName: "node-name file-name", text: "weightNode.io", divID: "io-1" }),
                                React.createElement(IOFile, { divClassName: "file io-file", pClassName: "node-name file-name", text: "bombNode.io", divID: "io-2" }),
                                React.createElement(IOFile, { divClassName: "file io-file", pClassName: "node-name file-name", text: "wallNode.io", divID: "io-3" }))),
                        React.createElement(FolderComponent, { colorOfFolder: "#4CAF50", text: "mazes", divClassName: "folder folder-drop", arrowID: "mazes-arrow" },
                            React.createElement("div", { className: "folder-drop-inner" },
                                React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "none.bat", divID: "bat-1" }),
                                React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "gridMaze.bat", divID: "bat-2" }),
                                React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "randomMaze.bat", divID: "bat-3" }),
                                React.createElement(BATFile, { divClassName: "file bat-file", pClassName: "maze-name file-name", text: "diagonalCutMaze.bat", divID: "bat-4" }))),
                        React.createElement(FolderComponent, { colorOfFolder: "#E5C07B", text: "speeds", divClassName: "folder folder-drop", arrowID: "speeds-arrow" },
                            React.createElement("div", { className: "folder-drop-inner" },
                                React.createElement(SYSFile, { divClassName: "file sys-file", pClassName: "speed-name file-name", text: "25percent.sys", divID: "sys-1" }),
                                React.createElement(SYSFile, { divClassName: "file sys-file", pClassName: "speed-name file-name", text: "50percent.sys", divID: "sys-2" }),
                                React.createElement(SYSFile, { divClassName: "file sys-file", pClassName: "speed-name file-name", text: "100percent.sys", divID: "sys-3" })))),
                    React.createElement(FolderComponent, { colorOfFolder: "#EF5350", text: "legend", divClassName: "folder folder-drop", arrowID: "legend-arrow" },
                        React.createElement("div", { className: "folder-drop-inner" },
                            React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "bombNode.gui", type: "bomb", divID: "gui-1" }),
                            React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "shortestPathNode.gui", type: "shortest-path", divID: "gui-2" }),
                            React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "wallNode.gui", type: "wall", divID: "gui-3" }),
                            React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "visitedNode.gui", type: "visited", divID: "gui-4" }),
                            React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "unvisitedNode.gui", type: "unvisited", divID: "gui-5" }),
                            React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "startNode.gui", type: "start-node", divID: "gui-6" }),
                            React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "endNode.gui", type: "end-node", divID: "gui-7" }),
                            React.createElement(GUIFile, { divClassName: "file gui-file", pClassName: "legend-name file-name", text: "weightNode.gui", type: "weight", divID: "gui-8" }))),
                    React.createElement(MDFile, { divClassName: "folder-less-file file folder-drop-inner md-file", pClassName: "file-name", text: "README.md", divID: "md-1" })))));
    }
}