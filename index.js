const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// ========================================
// WHATSAPP CONFIGURATION
// ========================================
const VERIFY_TOKEN = 'my_webhook_token_123';
const PHONE_NUMBER_ID = '857815490746141';
const ACCESS_TOKEN = 'EAAPteAlTBC8BPg48mVgbNQZAf6grXLtVqdRZCjN6iGd6ywPNap7wZCt3XVYfeIxVl9LlX18t6k2az2OWWzCDmTa4RjCuBjeofrkJNUQXMrFMolmDKbpf1ZBX5pOhRD6NoZCe3ypreJ87FBDo9CgsRsbRwj52WEZCedZCIB9zjOCd6LZCe1pgO3xJB4f1sUJQpgZDZD';

// ========================================
// BUSINESS INFORMATION
// ========================================
const BUSINESS_INFO = {
    name: 'TechSolutions Pro',
    email: 'support@techsolutionspro.com',
    phone: '+91-9876543210',
    website: 'https://techsolutionspro.com',
    address: 'Tech Park, Sector 62, Noida, UP 201309',
    hours: '9:00 AM - 6:00 PM (Mon-Fri)',
    timezone: 'IST (UTC+5:30)',
    founded: '2020',
    employees: '50+',
    clients: '1000+',
    rating: '4.8/5'
};

// ========================================
// PRODUCT CATALOG
// ========================================
const PRODUCTS = {
    whatsapp_automation: {
        name: 'WhatsApp Business Automation',
        price: '₹999-₹4999/month',
        features: ['Auto-replies', 'Broadcast messages', 'Analytics', 'Multi-agent support']
    },
    crm_integration: {
        name: 'CRM Integration Suite',
        price: '₹1999-₹7999/month',
        features: ['Lead management', 'Customer tracking', 'Sales pipeline', 'Reports']
    },
    ecommerce_bot: {
        name: 'E-commerce ChatBot',
        price: '₹1499-₹5999/month',
        features: ['Product catalog', 'Order tracking', 'Payment integration', 'Inventory sync']
    },
    custom_development: {
        name: 'Custom Development',
        price: 'Starting ₹25,000',
        features: ['Tailored solutions', 'API development', 'Third-party integrations', 'Maintenance']
    }
};

// ========================================
// TESTIMONIALS
// ========================================
const TESTIMONIALS = [
    {
        name: 'Rajesh Kumar',
        company: 'Kumar Electronics',
        message: 'Increased our customer response rate by 300%! Amazing service.',
        rating: 5
    },
    {
        name: 'Priya Sharma',
        company: 'Fashion Hub',
        message: 'The WhatsApp automation saved us 10 hours per day. Highly recommended!',
        rating: 5
    },
    {
        name: 'Amit Patel',
        company: 'Patel Trading Co.',
        message: 'Professional team, quick delivery, excellent support. Worth every penny.',
        rating: 5
    }
];

// ========================================
// FAQ DATABASE
// ========================================
const FAQ = {
    setup_time: 'Setup typically takes 24-48 hours after payment confirmation.',
    free_trial: 'Yes! We offer a 7-day free trial for all our premium plans.',
    support_languages: 'We support Hindi, English, and 10+ regional languages.',
    data_security: 'Your data is 100% secure with end-to-end encryption and GDPR compliance.',
    customization: 'All our solutions are fully customizable to match your business needs.',
    integration: 'We integrate with 50+ popular platforms including Shopify, WooCommerce, Salesforce.',
    refund_policy: '30-day money-back guarantee if you\'re not completely satisfied.'
};

app.use(express.json());

// ========================================
// ENHANCED AUTO-REPLY LOGIC WITH REALISTIC RESPONSES
// ========================================
function generateAutoReply(message) {
    const msg = message.toLowerCase().trim();
    
    // Greeting responses with personalized touch
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || 
        msg.includes('good morning') || msg.includes('good afternoon') || msg.includes('good evening') ||
        msg.includes('namaste') || msg.includes('namaskar')) {
        const greetings = [
            `👋 Hello! Welcome to ${BUSINESS_INFO.name}! I'm your virtual assistant.\n\n🌟 We're India's leading WhatsApp automation company, trusted by ${BUSINESS_INFO.clients} businesses since ${BUSINESS_INFO.founded}.\n\nHow can I help you today? Type "help" for quick options! 😊`,
            `🙏 Namaste! Great to see you at ${BUSINESS_INFO.name}!\n\n✨ We specialize in transforming businesses with smart WhatsApp solutions.\n\n🏆 Rated ${BUSINESS_INFO.rating} by our happy clients!\n\nWhat brings you here today? Type "help" to explore! 🚀`,
            `👋 Hi there! Welcome to ${BUSINESS_INFO.name}!\n\n🎯 Looking to automate your WhatsApp business? You're at the right place!\n\n💡 Our solutions have helped businesses increase efficiency by 300%!\n\nType "help" to see how we can help you! ⚡`
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Comprehensive help menu
    if (msg.includes('help') || msg.includes('menu') || msg.includes('options') || 
        msg.includes('what can you do') || msg.includes('assist') || msg.includes('guide')) {
        return `🤖 ${BUSINESS_INFO.name} - Your AI Assistant\n\n` +
               `🔥 POPULAR COMMANDS:\n` +
               `💰 "pricing" - View our plans & packages\n` +
               `📦 "products" - Explore our solutions\n` +
               `⭐ "demo" - Book a free demo\n` +
               `📞 "contact" - Get in touch with us\n\n` +
               `� OMORE OPTIONS:\n` +
               `🏢 "about" - Learn about our company\n` +
               `💬 "testimonials" - Read client reviews\n` +
               `❓ "faq" - Frequently asked questions\n` +
               `🕒 "hours" - Business hours & availability\n` +
               `📊 "features" - Detailed feature list\n\n` +
               `💡 TIP: Just type any keyword like "WhatsApp automation" or "chatbot"!\n\n` +
               `🎯 Ready to transform your business? Let's get started! 🚀`;
    }
    
    // Detailed pricing with realistic plans
    if (msg.includes('price') || msg.includes('pricing') || msg.includes('cost') || 
        msg.includes('rate') || msg.includes('plan') || msg.includes('subscription') || msg.includes('package')) {
        return `💰 ${BUSINESS_INFO.name} - Pricing Plans\n\n` +
               `🥉 STARTER PLAN - ₹999/month\n` +
               `✅ 1,000 messages/month\n` +
               `✅ Basic auto-replies\n` +
               `✅ Template messages\n` +
               `✅ Email support\n` +
               `✅ 7-day free trial\n\n` +
               `🥈 BUSINESS PLAN - ₹1,999/month ⭐ MOST POPULAR\n` +
               `✅ 5,000 messages/month\n` +
               `✅ Advanced AI responses\n` +
               `✅ Broadcast campaigns\n` +
               `✅ Analytics dashboard\n` +
               `✅ Priority support\n` +
               `✅ CRM integration\n\n` +
               `🥇 ENTERPRISE PLAN - ₹4,999/month\n` +
               `✅ Unlimited messages\n` +
               `✅ Custom AI training\n` +
               `✅ Multi-agent support\n` +
               `✅ White-label solution\n` +
               `✅ Dedicated account manager\n` +
               `✅ 24/7 phone support\n\n` +
               `🎁 SPECIAL OFFERS:\n` +
               `• 20% OFF on annual plans\n` +
               `• Free setup worth ₹5,000\n` +
               `• 30-day money-back guarantee\n\n` +
               `📞 Call ${BUSINESS_INFO.phone} for custom quotes!\n` +
               `💬 Type "demo" to book a free consultation!`;
    }
    
    // Product catalog with detailed descriptions
    if (msg.includes('product') || msg.includes('service') || msg.includes('solution') || 
        msg.includes('whatsapp') || msg.includes('automation') || msg.includes('chatbot') || msg.includes('features')) {
        return `🛍️ ${BUSINESS_INFO.name} - Product Catalog\n\n` +
               `🤖 WHATSAPP AUTOMATION SUITE\n` +
               `${PRODUCTS.whatsapp_automation.price}\n` +
               `• Smart auto-replies with AI\n` +
               `• Bulk message broadcasting\n` +
               `• Customer segmentation\n` +
               `• Real-time analytics\n` +
               `• Multi-language support\n\n` +
               `📊 CRM INTEGRATION PLATFORM\n` +
               `${PRODUCTS.crm_integration.price}\n` +
               `• Lead capture & nurturing\n` +
               `• Sales pipeline management\n` +
               `• Customer journey tracking\n` +
               `• Advanced reporting\n` +
               `• Team collaboration tools\n\n` +
               `🛒 E-COMMERCE CHATBOT\n` +
               `${PRODUCTS.ecommerce_bot.price}\n` +
               `• Product catalog integration\n` +
               `• Order tracking & updates\n` +
               `• Payment gateway support\n` +
               `• Inventory synchronization\n` +
               `• Abandoned cart recovery\n\n` +
               `⚙️ CUSTOM DEVELOPMENT\n` +
               `${PRODUCTS.custom_development.price}\n` +
               `• Tailored business solutions\n` +
               `• API development & integration\n` +
               `• Third-party app connections\n` +
               `• Ongoing maintenance & support\n\n` +
               `🎯 Want to see these in action? Type "demo" for a free presentation!`;
    }
    
    // Demo booking with urgency
    if (msg.includes('demo') || msg.includes('presentation') || msg.includes('show') || 
        msg.includes('trial') || msg.includes('test') || msg.includes('free')) {
        return `🎯 Book Your FREE Demo - ${BUSINESS_INFO.name}\n\n` +
               `🔥 LIMITED TIME: Get a personalized 30-minute demo worth ₹2,500 - absolutely FREE!\n\n` +
               `📅 AVAILABLE SLOTS:\n` +
               `• Today: 2:00 PM, 4:00 PM\n` +
               `• Tomorrow: 10:00 AM, 2:00 PM, 5:00 PM\n` +
               `• This Week: Multiple slots available\n\n` +
               `🎁 DEMO INCLUDES:\n` +
               `✅ Live WhatsApp automation showcase\n` +
               `✅ Custom solution for your business\n` +
               `✅ ROI calculation & savings analysis\n` +
               `✅ Free consultation worth ₹1,500\n` +
               `✅ Exclusive demo discount: 25% OFF\n\n` +
               `📞 BOOK NOW:\n` +
               `• Call: ${BUSINESS_INFO.phone}\n` +
               `• Email: ${BUSINESS_INFO.email}\n` +
               `• WhatsApp: Send "BOOK DEMO [Your Name]"\n\n` +
               `⏰ Hurry! Only 3 slots left this week!\n` +
               `🏆 Join ${BUSINESS_INFO.clients} satisfied customers!`;
    }
    
    // Comprehensive contact information
    if (msg.includes('contact') || msg.includes('support') || msg.includes('call') || 
        msg.includes('email') || msg.includes('reach') || msg.includes('address') || msg.includes('location')) {
        return `📞 Contact ${BUSINESS_INFO.name}\n\n` +
               `🏢 HEADQUARTERS:\n` +
               `${BUSINESS_INFO.address}\n` +
               `Near Metro Station, Noida\n\n` +
               `📱 PHONE SUPPORT:\n` +
               `Primary: ${BUSINESS_INFO.phone}\n` +
               `WhatsApp: ${BUSINESS_INFO.phone}\n` +
               `Toll-Free: 1800-123-4567\n\n` +
               `📧 EMAIL SUPPORT:\n` +
               `General: ${BUSINESS_INFO.email}\n` +
               `Sales: sales@techsolutionspro.com\n` +
               `Technical: tech@techsolutionspro.com\n\n` +
               `🌐 ONLINE:\n` +
               `Website: ${BUSINESS_INFO.website}\n` +
               `LinkedIn: /company/techsolutionspro\n` +
               `Facebook: /techsolutionspro\n\n` +
               `🕒 BUSINESS HOURS:\n` +
               `Mon-Fri: ${BUSINESS_INFO.hours}\n` +
               `Saturday: 10:00 AM - 4:00 PM\n` +
               `Sunday: Emergency support only\n\n` +
               `⚡ RESPONSE TIME:\n` +
               `• WhatsApp: Instant (24/7)\n` +
               `• Email: Within 2 hours\n` +
               `• Phone: Immediate pickup\n\n` +
               `🎯 Ready to get started? We're here to help! 🚀`;
    }
    
    // Detailed company information
    if (msg.includes('about') || msg.includes('company') || msg.includes('business') || 
        msg.includes('info') || msg.includes('who are you') || msg.includes('background')) {
        return `🏢 About ${BUSINESS_INFO.name}\n\n` +
               `🚀 COMPANY OVERVIEW:\n` +
               `Founded in ${BUSINESS_INFO.founded}, we're India's fastest-growing WhatsApp automation company with ${BUSINESS_INFO.employees} expert developers and ${BUSINESS_INFO.clients} happy clients.\n\n` +
               `🏆 ACHIEVEMENTS:\n` +
               `⭐ ${BUSINESS_INFO.rating} rating on Google & Trustpilot\n` +
               `🥇 "Best WhatsApp Solution 2023" - TechAwards\n` +
               `📈 300% average ROI for our clients\n` +
               `🌍 Serving 15+ countries globally\n\n` +
               `💼 OUR EXPERTISE:\n` +
               `✅ WhatsApp Business API integration\n` +
               `✅ AI-powered chatbot development\n` +
               `✅ CRM & e-commerce integrations\n` +
               `✅ Custom automation solutions\n` +
               `✅ Multi-language support systems\n\n` +
               `🎯 MISSION:\n` +
               `To help 10,000+ businesses automate their customer communication and increase efficiency by 500%.\n\n` +
               `👥 TEAM:\n` +
               `• 25+ Certified developers\n` +
               `• 15+ Customer success managers\n` +
               `• 10+ AI/ML specialists\n\n` +
               `🔒 CERTIFICATIONS:\n` +
               `• ISO 27001 (Data Security)\n` +
               `• WhatsApp Business Partner\n` +
               `• Google Cloud Partner\n\n` +
               `💬 Want to be our next success story? Type "demo"!`;
    }
    
    // Customer testimonials
    if (msg.includes('review') || msg.includes('testimonial') || msg.includes('feedback') || 
        msg.includes('client') || msg.includes('customer') || msg.includes('rating')) {
        const testimonial = TESTIMONIALS[Math.floor(Math.random() * TESTIMONIALS.length)];
        return `⭐ Client Testimonials - ${BUSINESS_INFO.name}\n\n` +
               `🗣️ FEATURED REVIEW:\n` +
               `"${testimonial.message}"\n` +
               `- ${testimonial.name}, ${testimonial.company}\n` +
               `Rating: ${'⭐'.repeat(testimonial.rating)}\n\n` +
               `📊 OVERALL STATISTICS:\n` +
               `⭐ Average Rating: ${BUSINESS_INFO.rating}/5\n` +
               `👥 Total Reviews: 500+\n` +
               `😊 Satisfaction Rate: 98%\n` +
               `🔄 Client Retention: 95%\n\n` +
               `🏆 RECENT ACHIEVEMENTS:\n` +
               `• "Best Customer Service 2023"\n` +
               `• "Most Innovative Solution 2023"\n` +
               `• "Fastest Growing Company 2023"\n\n` +
               `💬 MORE REVIEWS:\n` +
               `"Saved us 15 hours per week!" - Priya, Fashion Store\n` +
               `"ROI of 400% in just 3 months!" - Amit, Electronics\n` +
               `"Best investment for our business!" - Sunita, Restaurant\n\n` +
               `🎯 Ready to join our success stories? Type "demo" now!`;
    }
    
    // FAQ responses
    if (msg.includes('faq') || msg.includes('question') || msg.includes('doubt') || 
        msg.includes('setup') || msg.includes('security') || msg.includes('integration') || msg.includes('refund')) {
        return `❓ Frequently Asked Questions - ${BUSINESS_INFO.name}\n\n` +
               `⏱️ Q: How long does setup take?\n` +
               `A: ${FAQ.setup_time}\n\n` +
               `🆓 Q: Do you offer free trials?\n` +
               `A: ${FAQ.free_trial}\n\n` +
               `🌐 Q: Which languages do you support?\n` +
               `A: ${FAQ.support_languages}\n\n` +
               `🔒 Q: Is my data secure?\n` +
               `A: ${FAQ.data_security}\n\n` +
               `⚙️ Q: Can I customize the solution?\n` +
               `A: ${FAQ.customization}\n\n` +
               `🔗 Q: What integrations are available?\n` +
               `A: ${FAQ.integration}\n\n` +
               `💰 Q: What's your refund policy?\n` +
               `A: ${FAQ.refund_policy}\n\n` +
               `📞 STILL HAVE QUESTIONS?\n` +
               `• Call: ${BUSINESS_INFO.phone}\n` +
               `• Email: ${BUSINESS_INFO.email}\n` +
               `• Live Chat: Available 24/7\n\n` +
               `💡 Pro Tip: Type "demo" for personalized answers!`;
    }
    
    // Order status with realistic tracking
    if (msg.includes('order') || msg.includes('status') || msg.includes('tracking') || 
        msg.includes('delivery') || msg.includes('shipment') || msg.includes('ord')) {
        return `📦 Order Status & Tracking - ${BUSINESS_INFO.name}\n\n` +
               `🔍 TO CHECK YOUR ORDER:\n` +
               `Please provide:\n` +
               `• Order ID (e.g., TSP-2024-001234)\n` +
               `• Registered phone number\n` +
               `• Email address used for order\n\n` +
               `📋 ORDER PROCESS:\n` +
               `1️⃣ Order Confirmed (Instant)\n` +
               `2️⃣ Payment Verified (2-4 hours)\n` +
               `3️⃣ Setup Initiated (24 hours)\n` +
               `4️⃣ Testing Phase (24-48 hours)\n` +
               `5️⃣ Go Live (48-72 hours)\n\n` +
               `📱 TRACKING OPTIONS:\n` +
               `• WhatsApp updates (Real-time)\n` +
               `• Email notifications\n` +
               `• SMS alerts\n` +
               `• Customer portal access\n\n` +
               `🚀 EXPEDITED DELIVERY:\n` +
               `Need it faster? Upgrade to priority setup:\n` +
               `• 24-hour delivery: +₹2,500\n` +
               `• Same-day setup: +₹5,000\n\n` +
               `📞 NEED HELP?\n` +
               `Call ${BUSINESS_INFO.phone} for instant support!\n` +
               `Our team responds within 15 minutes! ⚡`;
    }
    
    // Business hours with detailed availability
    if (msg.includes('hours') || msg.includes('time') || msg.includes('open') || 
        msg.includes('closed') || msg.includes('schedule') || msg.includes('available')) {
        const currentHour = new Date().getHours();
        const isBusinessHours = currentHour >= 9 && currentHour < 18;
        const status = isBusinessHours ? '🟢 CURRENTLY OPEN' : '🔴 CURRENTLY CLOSED';
        
        return `🕒 Business Hours - ${BUSINESS_INFO.name}\n\n` +
               `${status}\n\n` +
               `📅 REGULAR HOURS:\n` +
               `Monday - Friday: 9:00 AM - 6:00 PM\n` +
               `Saturday: 10:00 AM - 4:00 PM\n` +
               `Sunday: Closed (Emergency support available)\n\n` +
               `⏰ TIMEZONE: ${BUSINESS_INFO.timezone}\n\n` +
               `🤖 24/7 SERVICES:\n` +
               `✅ WhatsApp Auto-replies (This bot)\n` +
               `✅ Order processing\n` +
               `✅ Payment processing\n` +
               `✅ Emergency technical support\n\n` +
               `👨‍💼 HUMAN SUPPORT:\n` +
               `• Sales Team: 9 AM - 7 PM\n` +
               `• Technical Team: 9 AM - 6 PM\n` +
               `• Account Managers: 10 AM - 6 PM\n\n` +
               `🎯 RESPONSE TIMES:\n` +
               `• WhatsApp: Instant (24/7)\n` +
               `• Email: 2 hours (business days)\n` +
               `• Phone: Immediate pickup\n\n` +
               `📞 EMERGENCY CONTACT:\n` +
               `For urgent issues: ${BUSINESS_INFO.phone}\n` +
               `We're always here to help! 🚀`;
    }
    
    // Thank you responses with engagement
    if (msg.includes('thank') || msg.includes('thanks') || msg.includes('appreciate') || 
        msg.includes('grateful') || msg.includes('awesome') || msg.includes('great')) {
        const responses = [
            `😊 You're absolutely welcome! We're thrilled to help!\n\n🌟 At ${BUSINESS_INFO.name}, customer satisfaction is our top priority.\n\n🎯 Is there anything else I can assist you with today?\n\n💡 Quick suggestions:\n• Type "demo" for a free consultation\n• Type "pricing" to see our plans\n• Type "testimonials" to read success stories`,
            `🙏 Thank you for your kind words! It means the world to us!\n\n✨ We're passionate about helping businesses like yours succeed with WhatsApp automation.\n\n🚀 Ready to take the next step?\n• Book a free demo: Type "demo"\n• Get pricing info: Type "pricing"\n• Learn more: Type "about"`,
            `💖 Aww, thank you! You just made our day brighter!\n\n🎉 We love helping businesses transform with smart automation.\n\n🔥 Want to see the magic in action?\n• Free demo: Type "demo"\n• Success stories: Type "testimonials"\n• Get started: Type "pricing"`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Goodbye responses with retention
    if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('see you') || 
        msg.includes('farewell') || msg.includes('exit') || msg.includes('later')) {
        return `👋 Goodbye from ${BUSINESS_INFO.name}!\n\n` +
               `🌟 Thank you for considering us for your WhatsApp automation needs!\n\n` +
               `💝 BEFORE YOU GO:\n` +
               `• Save our number: ${BUSINESS_INFO.phone}\n` +
               `• Visit our website: ${BUSINESS_INFO.website}\n` +
               `• Follow us on social media for tips & updates\n\n` +
               `🎁 SPECIAL OFFER:\n` +
               `Come back within 24 hours and get 15% OFF on any plan!\n` +
               `Just mention code: COMEBACK15\n\n` +
               `🚀 REMEMBER:\n` +
               `We're here 24/7 to help your business grow!\n` +
               `Type "demo" anytime for a free consultation.\n\n` +
               `✨ Wishing you tremendous success!\n` +
               `Have a wonderful day! 😊🎉\n\n` +
               `- Team ${BUSINESS_INFO.name} 💙`;
    }
    
    // Enhanced default response with smart suggestions
    return `🤖 Thanks for your message! I'm ${BUSINESS_INFO.name}'s AI assistant.\n\n` +
           `🧠 I didn't quite understand "${message.substring(0, 30)}${message.length > 30 ? '...' : ''}", but I'm learning every day!\n\n` +
           `💡 POPULAR COMMANDS:\n` +
           `• "pricing" - View our plans\n` +
           `• "demo" - Book free consultation\n` +
           `• "about" - Learn about us\n` +
           `• "help" - See all options\n\n` +
           `👨‍💼 HUMAN SUPPORT:\n` +
           `Our expert team is standing by to help!\n` +
           `📞 Call: ${BUSINESS_INFO.phone}\n` +
           `📧 Email: ${BUSINESS_INFO.email}\n\n` +
           `⚡ Response time: Under 15 minutes!\n\n` +
           `🎯 Pro Tip: Try asking about "WhatsApp automation" or "chatbot solutions"!\n\n` +
           `We're here to help your business grow! 🚀`;
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

// Health check and status page
app.get('/', (req, res) => {
    const uptime = process.uptime();
    const uptimeHours = Math.floor(uptime / 3600);
    const uptimeMinutes = Math.floor((uptime % 3600) / 60);
    
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${BUSINESS_INFO.name} - WhatsApp Bot Status</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
                .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                .status { background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4CAF50; }
                .info { background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196F3; }
                .warning { background: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF9800; }
                .code { background: #f0f0f0; padding: 10px; border-radius: 5px; font-family: monospace; margin: 10px 0; }
                .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0; }
                .stat-card { background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center; }
                .stat-number { font-size: 24px; font-weight: bold; color: #4CAF50; }
                .stat-label { color: #666; font-size: 14px; }
                h1 { color: #333; text-align: center; }
                h2 { color: #555; border-bottom: 2px solid #eee; padding-bottom: 10px; }
                .feature-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px; }
                .feature { background: #f8f9fa; padding: 10px; border-radius: 5px; }
                .btn { display: inline-block; padding: 10px 20px; background: #4CAF50; color: white; text-decoration: none; border-radius: 5px; margin: 5px; }
                .btn:hover { background: #45a049; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🤖 ${BUSINESS_INFO.name}</h1>
                <h2>WhatsApp Auto-Reply Bot Dashboard</h2>
                
                <div class="status">
                    <h3>🟢 System Status: ONLINE & ACTIVE</h3>
                    <p>All systems operational. Bot is responding to messages 24/7.</p>
                </div>
                
                <div class="stats">
                    <div class="stat-card">
                        <div class="stat-number">${uptimeHours}h ${uptimeMinutes}m</div>
                        <div class="stat-label">Uptime</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">24/7</div>
                        <div class="stat-label">Availability</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${BUSINESS_INFO.clients}</div>
                        <div class="stat-label">Happy Clients</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${BUSINESS_INFO.rating}</div>
                        <div class="stat-label">Rating</div>
                    </div>
                </div>
                
                <h2>🚀 Bot Capabilities</h2>
                <div class="feature-list">
                    <div class="feature">✅ Smart Auto-Replies</div>
                    <div class="feature">✅ Multi-Language Support</div>
                    <div class="feature">✅ Business Information</div>
                    <div class="feature">✅ Pricing & Plans</div>
                    <div class="feature">✅ Demo Booking</div>
                    <div class="feature">✅ Order Tracking</div>
                    <div class="feature">✅ Customer Testimonials</div>
                    <div class="feature">✅ FAQ Responses</div>
                    <div class="feature">✅ Contact Information</div>
                    <div class="feature">✅ Business Hours</div>
                </div>
                
                <h2>🔧 Technical Information</h2>
                <div class="info">
                    <p><strong>Webhook Endpoint:</strong> <code>/webhook</code></p>
                    <p><strong>Verification Token:</strong> <code>my_webhook_token_123</code></p>
                    <p><strong>Phone Number ID:</strong> <code>${PHONE_NUMBER_ID}</code></p>
                    <p><strong>Server Location:</strong> Render Cloud (US East)</p>
                    <p><strong>Response Time:</strong> < 500ms average</p>
                </div>
                
                <h2>🧪 Test Webhook</h2>
                <div class="warning">
                    <p>Use this link to test webhook verification:</p>
                    <div class="code">
                        <a href="/webhook?hub.mode=subscribe&hub.verify_token=my_webhook_token_123&hub.challenge=test123" target="_blank">
                            Test Webhook Verification
                        </a>
                    </div>
                </div>
                
                <h2>📞 Business Contact</h2>
                <div class="info">
                    <p><strong>Company:</strong> ${BUSINESS_INFO.name}</p>
                    <p><strong>Phone:</strong> ${BUSINESS_INFO.phone}</p>
                    <p><strong>Email:</strong> ${BUSINESS_INFO.email}</p>
                    <p><strong>Website:</strong> <a href="${BUSINESS_INFO.website}" target="_blank">${BUSINESS_INFO.website}</a></p>
                    <p><strong>Address:</strong> ${BUSINESS_INFO.address}</p>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <a href="${BUSINESS_INFO.website}" class="btn">Visit Website</a>
                    <a href="tel:${BUSINESS_INFO.phone}" class="btn">Call Now</a>
                    <a href="mailto:${BUSINESS_INFO.email}" class="btn">Send Email</a>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                    <p>Last Updated: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
                    <p>Powered by ${BUSINESS_INFO.name} | WhatsApp Business API</p>
                </div>
            </div>
        </body>
        </html>
    `);
});

// API endpoint to get business info
app.get('/api/business-info', (req, res) => {
    res.json({
        success: true,
        data: BUSINESS_INFO,
        timestamp: new Date().toISOString()
    });
});

// API endpoint to get products
app.get('/api/products', (req, res) => {
    res.json({
        success: true,
        data: PRODUCTS,
        timestamp: new Date().toISOString()
    });
});

// API endpoint to get testimonials
app.get('/api/testimonials', (req, res) => {
    res.json({
        success: true,
        data: TESTIMONIALS,
        timestamp: new Date().toISOString()
    });
});

// API endpoint to get FAQ
app.get('/api/faq', (req, res) => {
    res.json({
        success: true,
        data: FAQ,
        timestamp: new Date().toISOString()
    });
});

// API endpoint to test auto-reply generation
app.post('/api/test-reply', (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({
                success: false,
                error: 'Message is required'
            });
        }
        
        const reply = generateAutoReply(message);
        res.json({
            success: true,
            data: {
                input: message,
                reply: reply,
                timestamp: new Date().toISOString()
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// API endpoint for webhook status
app.get('/api/status', (req, res) => {
    const uptime = process.uptime();
    const uptimeHours = Math.floor(uptime / 3600);
    const uptimeMinutes = Math.floor((uptime % 3600) / 60);
    
    res.json({
        success: true,
        data: {
            status: 'online',
            uptime: `${uptimeHours}h ${uptimeMinutes}m`,
            uptimeSeconds: uptime,
            phoneNumberId: PHONE_NUMBER_ID,
            webhookEndpoint: '/webhook',
            verifyToken: 'configured',
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development',
            version: '1.0.0'
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        error: 'Internal server error',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint not found',
        availableEndpoints: [
            'GET /',
            'GET /webhook',
            'POST /webhook',
            'GET /api/business-info',
            'GET /api/products',
            'GET /api/testimonials',
            'GET /api/faq',
            'GET /api/status',
            'POST /api/test-reply'
        ],
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`🚀 WhatsApp webhook server running on port ${port}`);
    console.log(`📡 Webhook URL: http://localhost:${port}/webhook`);
    console.log(`🌐 Dashboard: http://localhost:${port}/`);
    console.log(`📊 API Endpoints available:`);
    console.log(`   - GET /api/business-info`);
    console.log(`   - GET /api/products`);
    console.log(`   - GET /api/testimonials`);
    console.log(`   - GET /api/faq`);
    console.log(`   - GET /api/status`);
    console.log(`   - POST /api/test-reply`);
    console.log(`\n🎯 Bot is ready to handle WhatsApp messages!`);
    console.log(`📱 Test by sending a message to your WhatsApp Business number`);
    console.log(`🌐 Dashboard: http://localhost:${port}/`);
});