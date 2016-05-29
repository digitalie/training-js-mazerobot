import {matrix} from './Config';

/**
 * Function to deal with situations
 * when obstacle is in front of the robot
 * @param {Object} position
 * @param {String} direction
 * @return {Object} new position and direction object
 */
export function obstacleAhead(position, direction) {
    // TODO: implement this function
    // demo output
    return {
        position: {
            x: position.x + 1,
            y: 0
        },
        direction: 'east',
        log: 'simple logger'
    };
}

/**
 * Function to deal with situations
 * when path is in front of the robot
 * @param {Object} position
 * @param {String} direction
 * @return {Object} new position and direction object
 */
export function pathAhead(position, direction) {
    // TODO: implement this function
    // demo output
    return {
        position: {
            x: position.x + 1,
            y: 0
        },
        direction: 'east',
        log: 'simple logger'
    };
}
