// controllers/bfhlController.js
const handleGetRequest = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};

const handlePostRequest = (req, res) => {
    const { data } = req.body;
    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    res.status(200).json({
        is_success: true,
        user_id: "your_name_ddmmyyyy",
        email: "your_email@domain.com",
        roll_number: "your_roll_number",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
};

module.exports = {
    handleGetRequest,
    handlePostRequest
};
