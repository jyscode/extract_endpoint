import express from 'express';
import fileUpload from 'express-fileupload';
import fs from 'fs';
const app = express();
const port = 3000;
import { extractEndpoints } from './func.mjs';
import path from 'path';
const __dirname = path.resolve();

app.use(fileUpload());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/upload', (req, res) => {
  if (!req.files || !req.files.uploadedFile) {
    return res.status(400).send('파일이 업로드되지 않았습니다.');
  }

  const uploadedFile = req.files.uploadedFile;

  uploadedFile.mv(__dirname + '/uploadedFile.js', (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    // 업로드한 파일을 읽고 엔드포인트 정보를 추출하는 로직을 추가하세요
    const fileContents = fs.readFileSync(__dirname + '/uploadedFile.js', 'utf-8');
    const endpoints = extractEndpoints(fileContents); // 파일에서 엔드포인트 추출 함수

    res.send('엔드포인트 정보: ' + endpoints);
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});


