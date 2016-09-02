import {obstacleAhead, pathAhead, isPositionAvailable} from './ControlRoom';

export default function (robot) {
    return isPositionAvailable(robot.position, robot.direction) ?
        pathAhead(robot.position, robot.direction) :
        obstacleAhead(robot.position, robot.direction);
}
