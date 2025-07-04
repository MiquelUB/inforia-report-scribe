declare module 'node:test' {
  export function describe(name: string, fn: () => void): void;
  export function it(name: string, fn: () => void): void;
}

declare module 'node:assert/strict' {
  const assert: any;
  export = assert;
}
