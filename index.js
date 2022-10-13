function a(x) {
    if (!x) return;
    b();
  return a + b;
}
function b() {
    return 1;
  }
module.exports = {a, b};
