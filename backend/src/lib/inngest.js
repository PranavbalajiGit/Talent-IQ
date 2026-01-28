import {Inngest} from 'inngest';
import { connectDB } from './db.js';
import User from '../models/User.js';

export const inngest = new Inngest({id : "talent-iq"});

const syncUser = inngest.createFunction(
    {id : "sync-user"},
    {event : "clerk.user/created"},
    async ({event}) => {
        await connectDB()

        const {id , email_address , first_name , last_name , image_url} = event.data;

        const newUser = {
            clerId : id ,
            email : email_address[0]?.email_address,
            name : `${first_name || ""} ${last_name || ""}`,
            profileImage : image_url
        }

        await User.create(newUser);
    }
)

//Check is the functions a Keyword during Notes
export const functions = [syncUser]