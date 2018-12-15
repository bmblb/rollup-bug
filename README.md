 This project shows odd problem with rollup not being able to process imports properly.

## Steps to reproduce

1. run `npm install`
2. run `npm run rollup`
3. open `examples/drag/app.module.js`

You will see that module file is missing import for Store

1. Now navigate to `examples/drag/lib/TaskStore.js` and move last import to the first
2. run `npm run rollup` again
3. open `examples/drag/app.module.js`

You will see import is now included

If you navigate to `examples/drag/index.html` in browser, you will see that store class was actually imported and works - text is rendered to DOM.