import {matrix} from './Config';

/**
 * Function to deal with situations
 * when fence is in front of the robot
 * @param {Object} position
 * @param {String} direction
 * @return {Object} new position and direction object
 */
export function fenceAhead(position, direction) {
    // TODO: implement this function
    // demo output
    return {
        position: {
            x: 1,
            y: 1
        },
        direction: 'east'
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
            x: 1,
            y: 1
        },
        direction: 'east'
    };
}
