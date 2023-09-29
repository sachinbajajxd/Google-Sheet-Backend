const axios = require('axios');

module.exports.fetchTasks = async(req, res) => {
    const url=process.env.API_URL;
    
    try{
        const response = await axios.get(url);
        if (response.status === 200) {
            const data = response.data;
            console.log(data);
            res.json(data);
        } else {
            res.status(response.status).json({ error: 'API request failed' });
        }
    }catch(error){
        console.log(error);
        return res.json({success: false, message:"Internal Server Error"});
    }

}

module.exports.addTask = async(req, res) => {
    const url=process.env.API_URL;
    
    try{
        const body=req.body;
        console.log(req.body);
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await axios.post(url, body, { headers });
        
        if (response.status === 200) {
            const data = response.data;
            console.log(data);
            res.json(data);
        } else {
            res.status(response.status).json({ error: 'API request failed' });
        }
    }catch(error){
        console.log(error);
        return res.json({success: false, message:"Internal Server Error"});
    }

}