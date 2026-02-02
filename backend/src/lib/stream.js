import {StreamChat} from 'stream-chat';
import { ENV } from './env';

const apikey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET

if (!apikey || !apiSecret) {
    console.error("STREAM_API_KEY or STREAM_API_SECRET is missing");
}

export const chatClient = StreamChat.getInstance(apikey, apiSecret);

export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUsers([userData]);
        return userData
    } catch (error) {
        console.error("Error upserting Stream user:", error);
    }
}
