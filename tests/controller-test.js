import {test} from 'tape';
import {isPositionAvailable, isPositionAvailable} from '../src/Controller';

test('isPositionAvailable', t => {
    t.plan(5);

    let matrix = [
        [1, 0],
        [0, 1]
    ];

    t.ok(isPositionAvailable(matrix, {
        x: 0,
        y: 1
    }), '[0,1] position is available');

    t.ok(isPositionAvailable(matrix, {
        x: 1,
        y: 0
    }), '[1,0] position is available');

    t.notOk(isPositionAvailable(matrix, {
        x: 0,
        y: 0
    }), '[0,0] position is available');

    t.notOk(isPositionAvailable(matrix, {
        x: 1,
        y: 1
    }), '[1,1] position is available');

    t.notOk(isPositionAvailable(matrix, {
        x: 2,
        y: 2
    }), '[2,2] position is available');

    t.end();
});


test('isPositionAvailable', t => {
    t.plan(5);

    let matrix = [
        [1, 0],
        [0, 1]
    ];

    t.notOk(isPositionAvailable(matrix, {
        x: 0,
        y: 1
    }, 'north'), 'north position off [0,1] is not available');

    t.notOk(isPositionAvailable(matrix, {
        x: 0,
        y: 1
    }, 'east'), 'east position off [0,1] is not available');

    t.ok(isPositionAvailable(matrix, {
        x: 0,
        y: 0
    }, 'south'), 'south position off [0,0] is available');

    t.ok(isPositionAvailable(matrix, {
        x: 1,
        y: 1
    }, 'west'), 'west position off [1,1] is not available');

    t.notOk(isPositionAvailable(matrix, {
        x: 0,
        y: 0
    }, 'west'), 'west position off [0,0] is not available');

    t.end();
});
