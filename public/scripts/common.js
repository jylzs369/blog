var common = {};

common.formatDate = function(timestamp) {
    var date = new Date(timestamp);
    var dateArray = [];
    var timeArray = [];
    var dateString = '';
    dateArray.push(date.getFullYear());
    dateArray.push(date.getMonth() + 1);
    dateArray.push(date.getDay());
    timeArray.push(date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    timeArray.push(date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    timeArray.push(date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    dateString = dateArray.join('.') + ' ' + timeArray.join(':');
    return dateString;
}
module.exports = common;