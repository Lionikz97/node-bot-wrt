export const cmds = ["nikki"];
export const exec = (bot, msg, chatId, messageId) => {
    bot.editMessageText('menu nikki', {
        chat_id: chatId,
        message_id: messageId+1,
        parse_mode: "html",
        disable_web_page_preview: true,
			reply_markup: {
					inline_keyboard: [
						[{
								text: 'start',
								callback_data: 'nikki start'
							},
							{
								text: 'stop',
								callback_data: 'nikki stop'
							}],
							[{
								text: 'restart',
								callback_data: 'nikki restart'
							}]
					]
				}
			});
};