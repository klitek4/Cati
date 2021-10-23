module.exports {
name: "ping",
run: async(client, message) => {
message.channel.send({ content: `Mój ping wynosi \`${client.ws.ping}\`` })
   }
}
