import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';
// Set up a Mock Service Worker server with the provided request handlers
const server = setupServer(...handlers);
// Start the server before running your tests
beforeAll(() => server.listen());
// Reset and stop the server after all tests finish
// @ts-ignore
afterAll(() => server.resetHandlers(), server.close());
