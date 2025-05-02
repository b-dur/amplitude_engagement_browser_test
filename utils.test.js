
import { foo } from './utils';


describe('foo', () => {
    test('invoke', async () => {
        const n = foo();
        expect(Number.isInteger(n)).toBe(true);
    });
});
