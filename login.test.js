const { checkLogin } = require('./login');

describe('checkLogin', () => {
  test('trả về true khi username = "admin" và password = "1234"', () => {
    expect(checkLogin('admin', '123')).toBe(true);
  });

  test('trả về false khi username sai', () => {
    expect(checkLogin('user', '123')).toBe(false);
  });

  test('trả về false khi password sai', () => {
    expect(checkLogin('admin', 'wrongpass')).toBe(false);
  });

  test('trả về false khi cả username và password đều sai', () => {
    expect(checkLogin('user', 'wrongpass')).toBe(false);
  });

  test('trả về false khi username hoặc password để trống', () => {
    expect(checkLogin('', '')).toBe(false);
    expect(checkLogin('admin', '')).toBe(false);
    expect(checkLogin('', '123')).toBe(false);
  });

  test('phân biệt chữ hoa/chữ thường (case-sensitive)', () => {
    expect(checkLogin('Admin', '123')).toBe(false);
  });
});
