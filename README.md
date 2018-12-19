# botbuilder-greeting
A BotBuilder middleware that greets users upon starting a chat session.

This is a middleware responds to a conversationUpdate activity type where a new member was added and it is not the same member id as the running bot.


### Installation

```npm install botbuilder-greeting```

### Usage

```javascript 

const adapter = new BotFrameworkAdapter();
adapter.use(new BotGreeting(context => {
    return `Hi I'm your friendly bot`;
}));

```
