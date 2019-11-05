var destination = 'wwwroot/';

const { src, dest } = require('gulp');

const flatpickr_dist = "node_modules/flatpickr/dist/";
function copy() {
    return src([flatpickr_dist + "flatpickr.min.js", flatpickr_dist + "flatpickr.min.css"])
        .pipe(dest(destination));
}

function copyLoc() {
    return src(flatpickr_dist + "/l10n/**/*")
        .pipe(dest(destination +"l10n/"));
}
exports.copy = copy;
exports.copyLoc = copyLoc;