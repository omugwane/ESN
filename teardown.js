module.exports = async function() {
    //Deleting uploaded images files after tests. Note that all files will be deleted!
    const fs = require('fs');
    const path = require('path');

    const imagesDirectory = 'public/uploads/images';
    fs.readdir(imagesDirectory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(imagesDirectory, file), err => {
                if (err) throw err;
            });
        }
    });

    //Deleting all video files used in testing. Note that all files will be deleted!
    const videosDirectory = 'public/uploads/videos';
    fs.readdir(videosDirectory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(videosDirectory, file), err => {
                if (err) throw err;
            });
        }
    });
};