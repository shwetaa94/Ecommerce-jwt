const bcrypt = require('bcrypt');

 const hashPassword = async(password)=>{
    try{
        const salts =10;
        const hash= await bcrypt.hash(password,salts);
        return hash
    }
    catch(err){
        console.log(err);
    }
}
 const comparePassword = async(password,hash)=>{
    return bcrypt.compare(password,hash)

}
module.exports = {hashPassword, comparePassword}