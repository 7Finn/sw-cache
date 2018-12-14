const assert = require('assert');

const server = require('../dist/server.bundle');
const Parser = new server.HtmlParser();

describe(`Parser.getDepth()`, () => {
    it(`#1 should return 3`, () => {
        const tagTemplate = `<div><a>222</a></div>`
        Parser.parseHtml(tagTemplate);
        assert.strictEqual(Parser.getDepth(), 3);
    })
    it(`#2 should return 2`, () => {
        const tagTemplate = `<div>
            <a></a>
            <div></div>
        </div>`
        Parser.parseHtml(tagTemplate);
        assert.strictEqual(Parser.getDepth(), 2);
    })
});