module.exports = class BotGreeting{
    constructor(handler){
        this.handler = handler;
    }
    async onTurn (context, next) {
        if(this.isUserJoinEvent(context)){
            return this.handleNewUser(context);
        }
        else{
            await next();
        }
    }

    isUserJoinEvent(context){
        return context.activity.type = "conversationUpdate" && context.activity.membersAdded && context.activity.membersAdded.length > 0;
      }
      
    handleNewUser(context){
        let user = this.getNewUser(context);
        if( (user && !this.isWebChat(context)) || (!user && this.isWebChat(context))){
          let message = this.handler(context);
          return context.sendActivity(message);
        }
      }
      
    isWebChat(context){
          return context.activity.channelId == 'webchat';
      }

    getNewUser(context){
        return context.activity.membersAdded.find(member=> member.id != context.activity.recipient.id);
      }
}