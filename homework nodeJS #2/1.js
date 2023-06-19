const fs = require(`fs`);   
function clear(path) {
    fs.open(path, `r`, (err) => {
        if (err) throw Error(err)
        console.log(`File created`)
    })
}
function read(path) {
    fs.readFile(path, { encoding: `utf8` }, (err, text) => {
        if (err) throw Error(err);
        console.log(text);
    });
}
function append(path, information) {
    clear(path)
    fs.open(path, `p`, (err, data) => {
        if (err) throw Error(err);
        console.log(`Opened`);
        fs.appendFile(path, information, { encoding: `utf8` }, (err) => {
            if (err) throw Error(err);
            console.log(`Done`);
        });
    });
    read(path)
}
append(`./data.txt`, `Yeldos Abdibekov 1998.11.26`);