export type Message = {
    id: string;
    issuer: string;
    chatId: string;
    text: string;
    createdAt: Date;
}


export type MessagesByChat = {
    chatId: string;
    messages: Message[];
}
