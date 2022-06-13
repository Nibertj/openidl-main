const fs = require('fs')
const conn = require('./connection.json')
const ExtractionPatternManager = require('./service/extraction-pattern-manager')
const ExtractionPatternProcessor = require('./service/extraction-pattern-processor')
const MongoDBManager = require('./service/mongo-database-manager')
const ep = require('./test/extractionPatterns/Trivial_02_ExtractionPattern');  //my extraction pattern
const Parser = require('json2csv')

function convertToCSV(json) {
    let rows = []
    for (let item of json) {
        let row = {}
        for (let field in item['_id']) {
            row[field] = item['_id'][field]
        }
        for (let field in item.value) {
            row[field] = item.value[field]
        }
        rows.push(row)
    }
    const fields = Object.keys(rows[0])
    const opts = { fields }

    let csv = null
    try {
        const parser = new Parser.Parser(opts)
        csv = parser.parse(rows)
    } catch (err) {
        console.error(err);
    }
    return csv
}

async function processExtractionPattern() {


    let local = conn.local
    let dbUrl = conn.dbUrl
    let dbName = conn.dbName
    let collectionName = conn.collectionName
    let reductionName = conn.reductionName
    var manager = new ExtractionPatternManager()
    var map = ep.map
    var reduce = ep.reduce
    //TODO: convert manager.createExtractionPattern() to work with json config 
    var extractionPattern = manager.createExtractionPattern("Trivial_01", "Trivial_01", "Trivial Extraction Pattern", "AL", "Personal Auto", map, reduce, "0.1", "2022-01-30T18:30:00Z", "2023-01-30T18:30:00Z", "2022-01-30T18:30:00Z", "2023-01-30T18:30:00Z", "2022-01-30T18:30:00Z", "2023-01-30T18:30:00Z", "kens@aaisonline.com")
    var dbManager = new MongoDBManager({ url: dbUrl })
    if (!dbManager) {
        throw 'No DB Manager'
    }
    console.log(typeof dbManager)
    const extractionPatternProcessor = new ExtractionPatternProcessor(dbManager, dbName, collectionName, reductionName)

    await dbManager.connect()
    await dbManager.useDatabase(dbName).catch((err) => { throw err })

    await extractionPatternProcessor.processExtractionPattern(extractionPattern)
    console.log(extractionPattern)
    manager.writeExtractionPatternToFile(extractionPattern, 'Trivial01_ExtractionPattern.json')

}

let startTime, endTime;
startTime = new Date();

processExtractionPattern().then(() => {
    console.log('Done...')
    endTime = new Date();
    let timeDiff = endTime - startTime;
    timeDiff /= 1000;
    let seconds = Math.round(timeDiff)
    console.log(`Elapsed time: ${seconds} seconds`)
    process.exit(0)
})