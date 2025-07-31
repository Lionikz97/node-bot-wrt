export const cmds = ["niproxy"];
export const exec = (bot, msg, chatId, messageId) => {
    bot.editMessageText('choose get proxy or zeus ⚡', {
        chat_id: chatId,
        message_id: messageId+1,
        parse_mode: "html",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'get proxy',
                    callback_data: 'niproxy'
                }],
                [{
                    text: 'zeus ⚡',
                    callback_data: 'nizeus'
                }]
                ]},
				reply_to_message_id: messageId
    });
};