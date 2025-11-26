 const fs = require('fs');
          const path = require('path');
          const remark = require('remark');
          const html = require('remark-html');

          const MD_SOURCE_DIR = path.join(__dirname, '..', 'data', 'md');
          const HTML_OUTPUT_DIR = path.join(__dirname, '..'); // Output to repository root

          async function processMarkdown() {
              const files = fs.readdirSync(MD_SOURCE_DIR).filter(file => file.endsWith('.md'));

              for (const file of files) {
                  const mdFilePath = path.join(MD_SOURCE_DIR, file);
                  const htmlFileName = file.replace(/\\.md\$/, '.html');
                  const htmlFilePath = path.join(HTML_OUTPUT_DIR, htmlFileName);

                  console.log(`Processing ${file} -> ${htmlFileName}`);

                  const fileContent = fs.readFileSync(mdFilePath, 'utf8');

                  const result = await remark()
                      .use(html)
                      .process(fileContent);

                  fs.writeFileSync(htmlFilePath, String(result));
                  
                  // Move the original MD file to its new location (/data/md is already the source, 
                  // so we just need to delete the old files from the root if they exist)
                  // Note: Since we only care about the HTML output, we can optionally delete old root MD files here.
              }
              console.log('Markdown processing complete.');
          }

          processMarkdown().catch(err => {
              console.error('Error during Markdown processing:', err);
              process.exit(1);
          });
