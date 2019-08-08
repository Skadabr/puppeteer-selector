const fs = require('fs');
const sizzleCode = fs.readFileSync(require.resolve('sizzle'));

const getElementBySizzle = eval("(selector) => { \n" + sizzleCode + "\n const elements = Sizzle(selector); return elements[0] }");

function css3Assert(instance) {

  const assertElementPresent = async (selector) =>{
    try {
      const element = await instance.evaluateHandle(
        getElementBySizzle,
        selector
      );
      if (element.asElement()) {
        return true
      } else {
        throw new Error('an element with selector: "'+ selector+ '" not found');
      }
    } catch (error) {
      throw error
    }

  };

  const getElement = async (selector) => {
    return await instance.evaluateHandle(
      getElementBySizzle,
      selector
    );
  };

  return {
    assertElementPresent: assertElementPresent,
    getElement: getElement
  };
}



module.exports = css3Assert;

