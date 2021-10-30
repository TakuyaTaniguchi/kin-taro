export function thisMonth() {
  const now = new Date();
  const month = now.getMonth() + 1
  return (`${ month}月`)
}