module.exports = (client) => {
    console.log('Bot Hoạt Động....!!');
    client.user.setPresence({ activities: [{ name: 'ADMIN: !  Bé Tép#8888', type: 'Playing' }], status: 'online'} );
}