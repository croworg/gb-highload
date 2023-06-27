// this is the test-setup.ts file
import fetch from 'node-fetch';

if (!global?.fetch) {
  // @ts-ignore
  global.fetch = jest.fn();
// or if you need the fetch implementation use node-fetch or something
  global.fetch = fetch;
}
