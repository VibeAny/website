const fs = require('fs')
const path = require('path')

// Copy all locale files to the output directory
const sourceLocalesDir = path.join(__dirname, '../public/locales')
const targetLocalesDir = path.join(__dirname, '../out/locales')

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()
  
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true })
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      )
    })
  } else {
    fs.copyFileSync(src, dest)
  }
}

console.log('Copying locale files to output directory...')
copyRecursiveSync(sourceLocalesDir, targetLocalesDir)
console.log('Locale files copied successfully!')