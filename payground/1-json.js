const fs=require('fs')

const dataBuffer= fs.readFileSync('./payground/1-json.json')
const dataJson= dataBuffer.toString()
const data=JSON.parse(dataJson)

console.log(data)


data.name="Utsav"
data.planet="Not Earth"
data.age=18

const updatedata=JSON.stringify(data)
fs.writeFileSync("./payground/1-json.json",updatedata)

console.log(JSON.parse(fs.readFileSync("./payground/1-json.json").toString()))