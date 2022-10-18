module.exports = {
    name: 'ping', 
    category: 'info',
    aliases: ['p'],
    run: (client, message, args) => {
        message.reply(`ms Hiện Tại Của Bạn: \`${client.ws.ping}ms\``);
    }
}