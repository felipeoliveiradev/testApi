const express = require('express');
const app =  express();

app.get('/allowlist', (req, res) => {
    const result = { 
        response: { message: { use_core_notifier: true } }
    }
    const header = crypto.createHmac('sha1', '21d8b9db5195ddd8c2ea860648770ca6-795506754').digest("hex");
    res.header("Authorization", `Bearer ${header}`);
    res.send(result);
})

app.listen(3000, () => console.log('express is listening on port 3000'))