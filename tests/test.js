let BotBuilderGreeting = require('../src/botbuildergreeting');
let assert = require('assert');

function createFakeContext(type){
  return {
    activity : {
      type : type,
      membersAdded: [
        {id:'test'}
      ],
      recipient: 'test-bot'
    },
    sendActivity : function(activity){
      return activity;
    }
  }
}

async function middleWareRunner(middleware,context){
  let result = await middleware.onTurn(context);
  console.log(result);
  return result;
}


describe('BotBuilderGreeting', function() {
  it('should include an onTurn function', function() {
    let greeting = new BotBuilderGreeting();
    assert.ok(greeting.onTurn);
  });

  it("should return the greeting if the activity is conversationUpdate",async function(){
    //arrange
    const context = createFakeContext('conversationUpdate');
    const greeting = "Hello World";
    const botBuilderGreeting = new BotBuilderGreeting(context=>greeting);

    //act
    const result = await middleWareRunner(botBuilderGreeting,context);

    //assert
    assert.equal(result,greeting);
  });
}); 