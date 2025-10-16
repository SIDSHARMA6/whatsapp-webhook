const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// WhatsApp Configuration
const VERIFY_TOKEN = 'my_webhook_token_123';
const PHONE_NUMBER_ID = '857815490746141';
const ACCESS_TOKEN = 'EAAPteAlTBC8BPg48mVgbNQZAf6grXLtVqdRZCjN6iGd6ywPNap7wZCt3XVYfeIxVl9LlX18t6k2az2OWWzCDmTa4RjCuBjeofrkJNUQXMrFMolmDKbpf1ZBX5pOhRD6NoZCe3ypreJ87FBDo9CgsRsbRwj52WEZCedZCIB9zjOCd6LZCe1pgO3xJB4f1sUJQpgZDZD';

app.use(express.json());

// Auto-reply logic
function generateAutoReply(message) {
    const msg = message.toLowerCase().trim();
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "👋 Hello! Thanks for messaging us. How can I help you today?\n\nType 'help' for more options.";
    }
    
    if (msg.includes('help') || msg.includes('menu')) {
        return "🤖 I can help you with:\n\n📦 Order status - type 'order'\n💰 Pricing info - type 'price'\n📞 Contact support - type 'contact'\n\nJust type any keyword!";
    }
    
    if (msg.includes('order') || msg.includes('status')) {
        return "📦 To check your order status, please share:\n• Your order ID\n• Phone number used for order\n\nOur team will respond within 2 hours!";
    }
    
    if (msg.includes('price') || msg.includes('pricing') || msg.includes('cost')) {
        return "💰 Our pricing:\n• Basic Plan: ₹999/month\n• Premium Plan: ₹1999/month\n• Enterprise: Custom pricing\n\nContact us for detailed information!";
    }
    
    if (msg.includes('contact') || msg.includes('support')) {
        return "📞 Contact Information:\n\n🕒 Hours: 9 AM - 6 PM (Mon-Fri)\n📧 Email: support@yourcompany.com\n📱 WhatsApp: This number\n\nWe'll respond within 2 hours!";
    }
    
    if (msg.includes('thank') || msg.includes('thanks')) {
        return "😊 You're welcome! Is there anything else I can help you with?\n\nType 'help' to see all options.";
    }
    
    if (msg.includes('bye') || msg.includes('goodbye')) {
        return "👋 Goodbye! Thanks for contacting us.\n\nFeel free to message anytime. Have a great day! 😊";
    }
    
    return "🤖 Thanks for your message! I'm an automated assistant.\n\nType 'help' to see what I can assist with, or our team will get back to you soon!";
}

// Send auto-reply to WhatsApp
async function sendAutoReply(toNumber, message) {
    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(`https://graph.facebook.com/v22.0/${PHONE_NUMBER_ID}/messages`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messaging_product: 'whatsapp',
                to: toNumber,
                type: 'text',
                text: { body: message }
            })
        });

        const result = await response.json();
        console.log('Auto-reply result:', result);
        return response.ok;
    } catch (error) {
        console.error('Error sending auto-reply:', error);
        return false;
    }
}

// Webhook verification (GET)
app.get('/webhook', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    console.log('Verification request:', { mode, token, challenge });

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('✅ Webhook verified successfully!');
        res.status(200).send(challenge);
    } else {
        console.log('❌ Webhook verification failed');
        res.status(403).send('Verification failed');
    }
});

// Handle incoming messages (POST)
app.post('/webhook', async (req, res) => {
    try {
        const body = req.body;
        console.log('Incoming webhook data:', JSON.stringify(body, null, 2));
        
        if (body.entry && body.entry[0].changes && body.entry[0].changes[0].value.messages) {
            const messages = body.entry[0].changes[0].value.messages;
            
            for (const message of messages) {
                const from = message.from;
                const messageText = message.text?.body || '';
                
                console.log(`Message from ${from}: ${messageText}`);
                
                // Generate and send auto-reply
                const reply = generateAutoReply(messageText);
                const success = await sendAutoReply(from, reply);
                
                console.log(`Auto-reply sent: ${success ? 'Success' : 'Failed'}`);
            }
        }
        
        res.status(200).send('EVENT_RECEIVED');
    } catch (error) {
        console.error('Error processing webhook:', error);
        res.status(500).send('Error processing webhook');
    }
});

// Health check
app.get('/', (req, res) => {
    res.send(`
        <h1>WhatsApp Auto-Reply Bot</h1>
        <p>Status: ✅ Active</p>
        <p>Webhook endpoint: <code>/webhook</code></p>
        <p>Test verification: <a href="/webhook?hub.mode=subscribe&hub.verify_token=my_webhook_token_123&hub.challenge=test123">/webhook?hub.mode=subscribe&hub.verify_token=my_webhook_token_123&hub.challenge=test123</a></p>
    `);
});

app.listen(port, () => {
    console.log(`🚀 WhatsApp webhook server running on port ${port}`);
    console.log(`📡 Webhook URL: http://localhost:${port}/webhook`);
});

module.exports = app;