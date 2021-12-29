const fs = require("fs")
const path = require("path")
const files = require("../config/contract-map")

const directory = ".verification"

if (!fs.existsSync(directory)) fs.mkdirSync(directory)

fs.readdir(directory, (err, items) => {
  if (err) throw err

  for (const file of items) {
    const location = path.join(directory, file)
    if (fs.lstatSync(location).isDirectory()) {
      fs.rmdirSync(location, { recursive: true })
    } else {
      fs.unlinkSync(location)
    }
  }

  files.forEach((file) => {
    fs.copyFileSync(`contracts/${file}`, `${directory}/${file}`)
  })
})
