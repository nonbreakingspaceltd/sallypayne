import { JSDOM } from 'jsdom';
import blockTools from '@sanity/block-tools';
import sanitizeHTML from './sanitizeHTML.js';
import defaultSchema from '../../schemas';

const ignoreImage = 'www.terrysfabrics.co.uk';

const blockContentType = defaultSchema
  .get('post')
  .fields.find((field) => field.name === 'body').type;

function htmlToBlocks(html, options) {
  if (!html) {
    return [];
  }

  let blocks = blockTools.htmlToBlocks(sanitizeHTML(html), blockContentType, {
    parseHtml: (htmlContent) => {
      return new JSDOM(htmlContent).window.document;
    },
    rules: [
      {
        deserialize(el, next, block) {
          // Special case for code blocks (wrapped in pre and code tag)
          if (el.tagName.toLowerCase() !== 'pre') {
            return undefined;
          }
          const code = el.children[0];
          let text = '';
          if (code) {
            const childNodes =
              code && code.tagName.toLowerCase() === 'code' ? code.childNodes : el.childNodes;
            childNodes.forEach((node) => {
              text += node.textContent;
            });
          } else {
            text = el.textContent;
          }
          if (!text) {
            return undefined;
          }
          return block({
            children: [],
            _type: 'code',
            text: text,
          });
        },
      },
      {
        deserialize(el, next, block) {
          const isIgnoredImage = (imgSrc) => imgSrc.includes(ignoreImage);

          if (el.tagName === 'IMG') {
            const imgSrc = el.getAttribute('src').replace(/^\/\//, 'https://');
            return !isIgnoredImage(imgSrc)
              ? block({
                  children: [],
                  _type: 'imageExtended',
                  _sanityAsset: `image@${imgSrc}`,
                })
              : undefined;
          }

          if (
            el.tagName.toLowerCase() === 'p' &&
            el.childNodes.length === 1 &&
            el.childNodes.tagName &&
            el.childNodes[0].tagName.toLowerCase() === 'img'
          ) {
            const imgSrc = el.childNodes[0].getAttribute('src').replace(/^\/\//, 'https://');
            return !isIgnoredImage(imgSrc)
              ? block({
                  _type: 'imageExtended',
                  _sanityAsset: `image@${el.childNodes[0]
                    .getAttribute('src')
                    .replace(/^\/\//, 'https://')}`,
                })
              : undefined;
          }

          // Only convert block-level images, for now
          return undefined;
        },
      },
    ],
  });

  return blocks;
}

export default (bodyHTML) => htmlToBlocks(bodyHTML);
