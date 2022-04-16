import { nodeHoverAnimation } from "./HexBoardUpdate";
import currentState from "./GlobalState";
// console.log(currentState.speed());
let i1 = 0;
let i2 = 0;
export const updatePathNodes = (pathIDs) => {
    setTimeout(() => {
        let id = pathIDs[i1];
        let svgID = `svg-${id}`;
        let propsID = `props-${id}`;
        document.getElementById(svgID).classList.remove('no-node', 'icon', 'svg-visited-node');
        document.getElementById(svgID).classList.add('svg-path-node');
        document.getElementById(propsID).classList.remove('no-node', 'visited-node');
        document.getElementById(propsID).classList.add('path-node');
        i1++;
        if (i1 < pathIDs.length) {
            updatePathNodes(pathIDs);
        }
    }, 50 * updateSpeed());
};
export const updateVisitedNodes = (visitedIDs, pathIDs) => {
    setTimeout(() => {
        let id = visitedIDs[i2];
        let svgID = `svg-${id}`;
        let propsID = `props-${id}`;
        if (!document.getElementById(svgID).classList.contains('svg-path-node')) {
            document.getElementById(svgID).classList.remove('no-node', 'icon');
            document.getElementById(svgID).classList.add('svg-visited-node');
            document.getElementById(propsID).classList.remove('no-node');
            document.getElementById(propsID).classList.add('visited-node');
            if (document.getElementById(propsID).classList.contains('weight-node'))
                nodeHoverAnimation(propsID);
            i2++;
            if (i2 < visitedIDs.length)
                updateVisitedNodes(visitedIDs, pathIDs);
            else if (i2 === visitedIDs.length)
                updatePathNodes(pathIDs);
        }
    }, 1 * updateSpeed());
};
const updateSpeed = () => {
    switch (currentState.speed()) {
        case 100:
            return 1;
        case 50:
            return 2;
        case 25:
            return 4;
    }
};
