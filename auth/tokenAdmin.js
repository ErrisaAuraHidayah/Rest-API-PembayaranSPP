const {verify} = require('jsonwebtoken')
const secretAdmin = '#$%^*&$#$^'

module.exports={
    checkToken: (req, res, next)=>{
        let token = req.get("authorization")

        if(token){
            let wow = token.slice(7)
            verify(wow,secretAdmin,(err,decoded)=>{
                if(err){
                    res.json({
                        succes: 0,
                        message: "Login First or Unauthorized user"
                    })
                }else{
                    let user = decoded.result
                    next()
                }
            })
        }else{
            res.json({
                succes: 0,
                message: "Acces Denied : unauthorized user"
            })
        }
    }
}