import {matrix, types} from './Config';

export function isPositionAvailable(position, direction) {
    const _checkPosition = (position) => {
        return typeof matrix[position.y] !== 'undefined'
            && typeof matrix[position.y][position.x] !== 'undefined'
            && types[matrix[position.y][position.x]] !== 'obstacle';
    };

    switch (direction) {
        case 'east':
            return _checkPosition({
                x: position.x + 1,
                y: position.y
            });
        case 'south':
            return _checkPosition({
                x: position.x,
                y: position.y + 1
            });
        case 'west':
            return _checkPosition({
                x: position.x - 1,
                y: position.y
            });
        case 'north':
            return _checkPosition({
                x: position.x,
                y: position.y - 1
            });
    }
}

/**
 * Function to deal with situations
 * when obstacle is in front of the robot
 * @param {Object} position
 * @param {String} direction
 * @return {Object} new position and direction object
 */
export const obstacleAhead = (position, direction) => {
    const directions = {
            vertical: ['north', 'south'],
            horizontal: ['west', 'east']
        },
        offset = [-1, 1];
    let newDirection = direction,
        randomChoice,
        newX, newY;

    while (!isPositionAvailable({x: position.x, y: position.y}, newDirection)) {
        newX = position.x;
        newY = position.y;
        randomChoice = Math.round(Math.random()); // {0, 1}
        if (direction == 'north' || direction == 'south') {
            //it means we can go east, west
            newX += offset[randomChoice];
            newDirection = directions.horizontal[randomChoice];
        }
        if (direction == 'west' || direction == 'east') {
            //it means we can go north, south
            newY += offset[randomChoice];
            newDirection = directions.vertical[randomChoice];
        }
    }

    console.log(`Can't go ${direction}. Will head ${newDirection}.`);
    return {
        position: {
            x: newX,
            y: newY
        },
        direction: newDirection,
        log: 'I am stuck!'
    };
}

/**
 * Function to deal with situations
 * when path is in front of the robot
 * @param {Object} position
 * @param {String} direction
 * @return {Object} new position and direction object
 */
export const pathAhead = (position, direction) => {
    let x = position.x,
        y = position.y;

    if (direction == 'north') {
        y -= 1;
    }
    if (direction == 'south') {
        y += 1;
    }
    if (direction == 'west') {
        x -= 1;
    }
    if (direction == 'east') {
        x += 1;
    }

    return {
        position: {
            x,
            y
        },
        direction,
        log: `I am moving ${direction}!`
    };
}