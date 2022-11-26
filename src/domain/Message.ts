export type Message = {
    id: string;
    issuer: string;
    chatId: string;
    text: string;
    createdAt: Date;
    recipient: string;
}