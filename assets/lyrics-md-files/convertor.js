
const fs = require("fs");
const lineByLine = require('n-readlines');
const srcFilePath = '/Users/aby/dev/exp/camp/src/assets/lyrics-md-files/master.md'
const buildBasePath = '/Users/aby/dev/exp/camp/src/assets/lyrics-md-files/songs/';

const regex = /\*\*[0-9]{1,2}.*\*\*$/gmi;
const lyricsOffset = 2;

String.prototype.capitalize = function (lower) {
  return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};


function setEndingLine(lineNo, index) {
  const previous = index[index.length - 1];

  if (previous) {
    previous.endingLine = lineNo - 1;
  }
}

function generateMeta() {
  let line, lineNo = 1;
  let index = [];
  const liner = new lineByLine(srcFilePath);
  while (line = liner.next()) {
    const lineStr = line.toString('utf-8');

    if (lineStr.match(regex)) {
      setEndingLine(lineNo, index);
      index.push({
        title: lineStr,
        startingLine: lineNo
      });
    }

    ++lineNo;
  }
  setEndingLine(lineNo, index);

  return index;
}

function generateConfig(index) {
  let songConfig = [];
  index.forEach((s) => {
    const content = getLines(s.startingLine + lyricsOffset, s.endingLine);
    const title = stripNonAlphaChars(s.title).capitalize(true);
    const firstLine = getLine(s.startingLine + lyricsOffset);
    const path = createFile(title, content);

    songConfig.push({
      title: title,
      firstLine: firstLine,
      src: path
    });
  });

  return songConfig;
}

function createFile(title, content) {
  const ext = '.md';
  const filename = title.split(' ').slice(0, 3).join('-').toLowerCase() + ext;
  const fullpath = buildBasePath + filename;

  const writeStream = fs.createWriteStream(fullpath);
  writeStream.write(content);
  writeStream.end();
  return fullpath;
}

function stripNonAlphaChars(str) {
  return str.replace(/[^A-Za-z\s]/gi, '').trim();
}

function getLine(n) {
  const liner = new lineByLine(srcFilePath);
  let currentLine = 0;
  while (line = liner.next()) {
    if (++currentLine === n) {
      return line.toString('utf-8');
    }
  }
}

function getLines(s, e) {
  const liner = new lineByLine(srcFilePath);
  let currentLine = 0;
  let buff = '';
  while (line = liner.next()) {
    currentLine++;
    if (currentLine >= s && currentLine <=e) {
      buff += line.toString('utf-8') + '\n';
    }
  }

  return buff;
}

function init() {
  const meta = generateMeta();
  console.log();
  const jsonConf = JSON.stringify(generateConfig(meta), '', 2);

  const writeStream = fs.createWriteStream('config.json');
  writeStream.write(jsonConf);
  writeStream.end();
}

init();

