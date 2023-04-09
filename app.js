"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FooBoot {
    constructor(app) {
        this.app = app;
    }
    configWillLoad() {
        try {
            console.log('env:', this.app.config.env);
        }
        catch (err) {
            console.log('app err', err);
        }
        // console.log('********************sequelize config end:********************', this.app.config.sequelize);
    }
    configDidLoad() {
        // Config, plugin files have loaded.
    }
    async didLoad() {
        // All files have loaded, start plugin here.
    }
    async willReady() {
        // All plugins have started, can do some thing before app ready.
    }
    async didReady() {
        // Worker is ready, can do some things
        // don't need to block the app boot.
    }
    async serverDidReady() {
        // Server is listening.
    }
    async beforeClose() {
        // Do some thing before app close.
    }
}
exports.default = FooBoot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBcUIsT0FBTztJQUcxQixZQUFZLEdBQWdCO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSTtZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELDJHQUEyRztJQUM3RyxDQUFDO0lBRUQsYUFBYTtRQUNYLG9DQUFvQztJQUN0QyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU87UUFDWCw0Q0FBNEM7SUFDOUMsQ0FBQztJQUVELEtBQUssQ0FBQyxTQUFTO1FBQ2IsZ0VBQWdFO0lBQ2xFLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUTtRQUNaLHNDQUFzQztRQUN0QyxvQ0FBb0M7SUFDdEMsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjO1FBQ2xCLHVCQUF1QjtJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixrQ0FBa0M7SUFDcEMsQ0FBQztDQUNGO0FBeENELDBCQXdDQyJ9