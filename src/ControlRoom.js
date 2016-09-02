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
 * when obstacle is in front of the robot or we want to change the direction
 * @param {Object} position
 * @param {String} direction
 * @return {Object} new position and direction object
 */
export const changeDirection = (position, direction) => {
    const directions = {
            vertical: ['north', 'south'],
            horizontal: ['west', 'east']
        },
        offset = [-1, 1];
    let newDirection = direction,
        randomChoice,
        newX = position.x, newY = position.y;

    while (!isPositionAvailable({x: position.x, y: position.y}, newDirection)
        || (newX == position.x && newY == position.y) ) {
        newX = position.x;
        newY = position.y;
        randomChoice = Math.round(Math.random()); // {0, 1}

        if (Math.round(Math.random()) == 0) {
            //randomly move on the horizontal axis
            newX += offset[randomChoice];
            newDirection = directions.horizontal[randomChoice];
        }
        else {
            //randomly move on the vertical axis
            newY += offset[randomChoice];
            newDirection = directions.vertical[randomChoice];
        }
    }

    console.log(`I will head ${newDirection}.`);
    return {
        position: {
            x: newX,
            y: newY
        },
        direction: newDirection,
        log: `I'll change direction to ${newDirection} now.`
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
        log: ``
    };
}