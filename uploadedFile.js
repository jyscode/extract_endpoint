const express = require('express');
const app = express();
const port = 3000;

// GET / 엔드포인트
app.get('/', (req, res) => {
  res.send('GET 요청: 이것은 루트 엔드포인트입니다.');
});

// POST /create 엔드포인트
app.post('/create', (req, res) => {
  res.send('POST 요청: 새로운 항목을 생성합니다.');
});

// PUT /update/:id 엔드포인트
app.put('/update/:id', (req, res) => {
  const itemId = req.params.id;
  res.send(`PUT 요청: 항목 ${itemId}을 업데이트합니다.`);
});

// DELETE /delete/:id 엔드포인트
app.delete('/delete/:id', (req, res) => {
  const itemId = req.params.id;
  res.send(`DELETE 요청: 항목 ${itemId}을 삭제합니다.`);
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
