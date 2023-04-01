const express = require("express");
const app = express();
var cors = require('cors');
const PORT = process.env.PORT || 3030;

const xlsx = require('xlsx');
const workbook=xlsx.readFile('Mira.xlsx');
let worksheets ={};
for(const sheetName of workbook.SheetNames){
    worksheets[sheetName]=xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

app.use(cors());
app.get('/',(req,res)=>{
    res.send(worksheets.Sheet1);
})

app.listen(PORT, () => {
     console.log(`server started on port ${PORT}`);
});

