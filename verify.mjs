import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const slides = html.match(/<section\b[^>]*class="[^"]*\bslide\b/g) || [];

assert.equal(slides.length, 59, '公开报告应包含 59 页');
assert.ok(html.includes('一次性销售占56.0%'), '第27页应使用修正后的品类映射');
assert.ok(!html.includes('/Users/hanyuxuan/'), '公开报告不得包含本地绝对路径');
assert.ok(html.includes('exportDeck'), '公开报告应保留交互与导出能力');

console.log('PASS: GitHub Pages 静态报告校验通过');
