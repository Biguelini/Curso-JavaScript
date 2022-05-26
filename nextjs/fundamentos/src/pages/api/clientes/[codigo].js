export default function handler(req, res){
    res.status(200).json({
        codigo: req.query.codigo
    })
}