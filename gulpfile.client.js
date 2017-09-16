if (!process.env.BUCKET_NAME) {
    throw new Error('Environment variable BUCKET_NAME not defined.');
}
const fs = require('fs');
const gulp = require('gulp');
const yaml = require('js-yaml');
const { 
    provider: {
        region
    }
} = yaml.safeLoad(fs.readFileSync(`${__dirname}/serverless.yml`, 'utf8'));

const s3 = require('gulp-s3-upload')({ region });

gulp.task("default", function() {
    gulp.src("./build/client/public/**").pipe(s3({
        Bucket: process.env.BUCKET_NAME,
        ACL: 'public-read'
    },{
        maxRetries: 5
    }));
});


