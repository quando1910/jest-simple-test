const lib = require('./index');

test('test case 1', () => {
    lib.a(true);
    const spy = jest.spyOn(lib, 'b');
    expect(spy).toHaveBeenCalled();
});