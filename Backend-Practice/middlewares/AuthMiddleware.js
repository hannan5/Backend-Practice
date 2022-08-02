const jwt = require('jsonwebtoken')

exports.GenerateToken = async(id) =>{
   return jwt.sign(id.toString(), 'qweasdxcv123qpoilkjmnb456789')
}