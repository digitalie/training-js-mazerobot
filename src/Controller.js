import {changeDirection, pathAhead, isPositionAvailable} from './ControlRoom';

export default function (robot) {
    const RANDOM_CHANCE_OF_CHANGING_DIRECTION = 0.25;
    if (isPositionAvailable(robot.position, robot.direction)) {
        if (Math.random() >=  RANDOM_CHANCE_OF_CHANGING_DIRECTION) {
            return pathAhead(robot.position, robot.direction);
        }
    }
    return changeDirection(robot.position, robot.direction);
}
