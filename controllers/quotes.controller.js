const path = require("path");
const fs = require("fs");
const {yup} = require("../schemas");
const DB_PATH = path.join(__dirname + "/../data/db.json");
let db = require(DB_PATH);

function render(file, res) {
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController {
    async index(req, res) {
        return render("quotes", res);
    }
    async get(req, res) {
        return res.send(db);
    }
    async add(req, res) {
        try{
            const {body: quote} = req; 
            yup.validate(quote)
            .then(quote => {
                const lastQuote = db[db.length - 1];
                const {id} = lastQuote;
                quote.id = id + 1;
                db.push(quote);
                fs.writeFileSync(DB_PATH, JSON.stringify(db));
                return res.status(201).send();
            })
            .catch(err => {
                res.status(400).json({ Error: err.message });    
            });
        } catch (error) {
            //console.log(error);
            res.status(500).json({ Error: "Error while storing new quote." });
        }
    }
}

module.exports = new QuotesController();