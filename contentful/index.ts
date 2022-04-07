import { createClient } from "contentful";

const client = createClient({
    space: '9c0t9v8n4ww9',
    accessToken: 'YOUR TOKEN'
});

export default client