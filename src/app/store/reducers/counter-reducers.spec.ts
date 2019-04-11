import { counterReducerLower, counterReducerHigher } from './counter-reducers';
declare var it, expect, describe;

describe('The counter reducer', () => {
    it('should increment the counter when INCREMENT action is dispatched (counterReducerLower)', () => {
        const actual = counterReducerLower(0, {type: 'IncrementLower'});
        const expected = 1;
        expect(actual).toBe(expected);
    });

    it('should decrement the counter when DECREMENT action is dispatched (counterReducerLower)', () => {
        const actual = counterReducerLower(0, {type: 'DecrementLower'});
        const expected = -1;
        expect(actual).toBe(expected);
    });

    it('should increment the counter when INCREMENT action is dispatched (counterReducerHigher)', () => {
        const actual = counterReducerHigher(0, {type: 'IncrementHigher'});
        const expected = 1;
        expect(actual).toBe(expected);
    });

    it('should decrement the counter when DECREMENT action is dispatched (counterReducerHigher)', () => {
        const actual = counterReducerHigher(0, {type: 'DecrementHigher'});
        const expected = -1;
        expect(actual).toBe(expected);
    });
});
