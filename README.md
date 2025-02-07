# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions causing the server to crash without proper error handling.

The `bug.js` file contains a server that lacks error handling.  The `bugSolution.js` file provides a corrected version that includes proper error handling using the `error` event.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js`.
4. Observe that the server crashes without detailed error information.
5. Run `node bugSolution.js`. The server should run gracefully.