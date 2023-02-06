let num = -12
try {
if (num == "") throw "kichu nai"
if (isNaN(num)) throw "eta number na"
num = Number(num)
if (num>20) throw "beshi boro"
if (num<0) throw {
                message :"beshi choto",
                name :"High Error"}
}catch(err){
     console.log(err)
}
finally {
    console.log(num)
}