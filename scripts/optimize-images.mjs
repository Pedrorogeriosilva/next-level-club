import sharp from 'sharp'
import { readdir, mkdir, stat } from 'node:fs/promises'
import { join, parse } from 'node:path'

const SRC = 'public/assets'
const OUT = 'public/assets'

const targets = [
  { name: 'casal', widths: [640, 960, 1400], quality: { jpg: 78, webp: 72 } },
  { name: 'mentoras', widths: [640, 960], quality: { jpg: 80, webp: 75 } },
]

await mkdir(OUT, { recursive: true })

const files = await readdir(SRC)

for (const t of targets) {
  const source = files.find((f) => parse(f).name === t.name && /\.(jpe?g|png)$/i.test(f))
  if (!source) {
    console.log(`skip ${t.name} (source not found)`)
    continue
  }
  const input = join(SRC, source)
  const inputSize = (await stat(input)).size
  console.log(`\n${source} (${(inputSize / 1024 / 1024).toFixed(2)} MB)`)

  for (const w of t.widths) {
    const baseOut = join(OUT, `${t.name}-${w}`)
    await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: t.quality.jpg, mozjpeg: true })
      .toFile(`${baseOut}.jpg`)
    await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: t.quality.webp })
      .toFile(`${baseOut}.webp`)
    const jpgSize = (await stat(`${baseOut}.jpg`)).size
    const webpSize = (await stat(`${baseOut}.webp`)).size
    console.log(`  ${w}w  jpg=${(jpgSize / 1024).toFixed(0)}KB  webp=${(webpSize / 1024).toFixed(0)}KB`)
  }
}

console.log('\ndone')
