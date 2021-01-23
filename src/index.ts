export function hello(name?: string) {
  if (name) {
    return `Hello ${name}`;
  } else {
    return "Hello World";
  }
}
