const epxress = require('express')
const router = epxress.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)) //TODO: localhost/users
        console.log('CARGAR RUTA ---->', fileWithOutExt)
    }
})

// router.get('*', (req, res) => {
//     res.status(404)
//     res.send({ error: 'Not found' })
// })

router.get('/',(req,res)=>{
   const htmlContent = '<h1>Hola desde Node.js</h1>';
   res.send(htmlContent);
})

module.exports = router