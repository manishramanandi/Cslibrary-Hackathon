import multer, { diskStorage } from 'multer';
import path from 'path';


const storage  = multer.diskStorage({
    destination: (req, file, cb) => {
        // if the field name is image send it to /images else it means it is a file so send to /files
        const dir = file.fieldname === 'image' ? 'uploads/images/' : 'uploads/files/';
        cb(null, dir);
    },
    filename : (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

export default upload;