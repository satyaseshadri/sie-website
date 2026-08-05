import { pdf } from 'pdf-to-img';
import fs from 'node:fs';

const doc = await pdf('public/docs/mc2plus-accelerator-poster.pdf', { scale: 2.5 });
let i = 0;
for await (const page of doc) {
  i += 1;
  fs.writeFileSync(`public/images/mc2plus-poster${i > 1 ? '-' + i : ''}.png`, page);
}
console.log(`Wrote ${i} page image(s)`);
