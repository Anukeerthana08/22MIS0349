const axios = require("axios");

const Log = require("./logging_middleware/logger");

async function main() {

    try {

        // AUTH API CALL

        const authResponse = await axios.post(
            "http://4.224.186.213/evaluation-service/auth",
            {
                email: "anukeerthana2920@gmail.com",
                name: "Anu Keerthana P",
                rollNo: "22MIS0349",
                accessCode: "SfFuWg",
                clientID: "d32bfe9a-bb7b-4412-9273-8b6b0d453cad",
                clientSecret: "NFeBCyNfKwmQqpHQ"
            }
        );

        const token = authResponse.data.access_token;

        console.log("TOKEN RECEIVED");

        // LOG API CALL

        await Log(
            "backend",
            "info",
            "handler",
            "Test log working",
            token
        );

    } catch (error) {

        console.log(error.message);

    }
}

main();