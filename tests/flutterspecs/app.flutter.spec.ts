// import {find} from 'appium-flutter-finder';
const assert = require("assert");
const find = require("appium-flutter-finder");

describe("Basic Flutter test", () => {
    beforeEach(async () => {});

    it("should open app", async () => {
        const counterTextFinder = find.byValueKey("counter");
        const buttonFinder = find.byValueKey("increment");

        const bottomLeft = await driver.execute(
            "flutter:getBottomLeft",
            counterTextFinder
        );

        console.log(bottomLeft);

        const elementText = driver.getElementText(counterTextFinder);

        console.log("ELEMENT TEXT", elementText);

        elementText.then((res) => console.log(res));

        await driver.pause(10000);
    });
});

// const validateElementPosition = async (driver: WebdriverIO., buttonFinder: any) => {
//     const bottomLeft = await driver.execute(
//       'flutter:getBottomLeft',
//       buttonFinder
//     );
//     assert.strictEqual(typeof bottomLeft.dx, 'number');
//     assert.strictEqual(typeof bottomLeft.dy, 'number');

//     const bottomRight = await driver.execute(
//       'flutter:getBottomRight',
//       buttonFinder
//     );
//     assert.strictEqual(typeof bottomRight.dx, 'number');
//     assert.strictEqual(typeof bottomRight.dy, 'number');

//     const center = await driver.execute('flutter:getCenter', buttonFinder);
//     assert.strictEqual(typeof center.dx, 'number');
//     assert.strictEqual(typeof center.dy, 'number');

//     const topLeft = await driver.execute('flutter:getTopLeft', buttonFinder);
//     assert.strictEqual(typeof topLeft.dx, 'number');
//     assert.strictEqual(typeof topLeft.dy, 'number');

//     const topRight = await driver.execute('flutter:getTopRight', buttonFinder);
//     assert.strictEqual(typeof topRight.dx, 'number');
//     assert.strictEqual(typeof topRight.dy, 'number');
//   };
