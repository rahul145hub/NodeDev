const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "damzhg3x1",
    api_key: "626181612924415",
    api_secret: "TFCll3QPcbQ7eJP2UhEEslBQPS8"
});

exports.uploadFile = async (req, res) => {
    try {
        const file = req.files.photo;
        const url = await cloudinary.uploader.upload(file.tempFilePath).secure_url;
        res.status(201).json({
            msg: "file uploaded",
            url
        })        
    } catch (error) {
        res.status(500).json({
            msg: "file not uploaded",
            error: error.message
        })
    }
}