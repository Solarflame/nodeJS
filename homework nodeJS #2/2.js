const fs = require(`fs`)
function open(path){
    fs.open(path, 'p', (err) => {
        if(err) throw err;
        console.log('File created');
    });
}
function append(path, argument){
    fs.appendFile(path, JSON.stringify(argument), `utf8`, (err)=>{
        if(err) throw Error(err)
    })
}
function read(path){
    fs.readFile(path,{encoding:`utf8`}, (err, data)=>{
        if(err) throw Error(err)
        let counter = JSON.parse(data)
        if(counter.count < counter.target){
            open(path)
            counter.count++
            append(path,counter)
            console.log(`Счетчик увеличен!!!`)
        }else if(counter.count >= counter.target){
            alert(`Счётчик уже максимальный!!!`)
            open(path)
            counter.count = 0
            append(path,counter)
            console.log(`счетчик обнулен!!!`)
        }
    })
}
read(`./data2.json`)