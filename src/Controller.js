import {matrix, types} from './Config';
import {obstacleAhead, pathAhead} from './ControlRoom';

function isPositionAvailable(position) {
    return typeof matrix[position.y] !== 'undefined'
        && typeof matrix[position.y][position.x] !== 'undefined'
        && types[matrix[position.y][position.x]] !== 'obstacle';
}

function isPositionInFrontAvailable(position, direction) {
    switch (direction) {
        case 'east':
            return isPositionAvailable({
                x: position.x + 1,
                y: position.y
            });
        case 'south':
            return isPositionAvailable({
                x: position.x,
                y: position.y + 1
            });
        case 'west':
            return isPositionAvailable({
                x: position.x - 1,
                y: position.y
            });
        case 'north':
            return isPositionAvailable({
                x: position.x,
                y: position.y - 1
            });
    }
}

export default function (robot) {
    return isPositionInFrontAvailable(robot.position, robot.direction) ?
        pathAhead(robot.position, robot.direction) :
        obstacleAhead(robot.position, robot.direction);
}
