<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

export default async function DownloadDocument(req, res) {
  const { fileName, docType } = req.body; // รับค่าชื่อตัวแปร กับ ประเภทเอกสาร จาก req
  try {
    const filePath = path.join('public', 'Document', docType, fileName);

    // Stream the file as the response
    const fileStream = fs.createReadStream(filePath);

    // Set the appropriate Content-Type header for a PDF
    res.setHeader('Content-Type', 'application/pdf');

    // Pipe the file stream to the response
    fileStream.pipe(res);

    // Handle errors during the streaming
    fileStream.on('error', (error) => {
      res.status(500).json({ error: 'Error streaming the file' });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
=======
import fs from 'fs'
import path from 'path'

export default async function DownloadDocument(req, res) {
  const { fileName, docType } = req.body // รับค่าชื่อตัวแปร กับ ประเภทเอกสาร จาก req
  try {
    const filePath = path.join('..', 'Document', docType, fileName)

    // Stream the file as the response
    const fileStream = fs.createReadStream(filePath)

    // Set the appropriate Content-Type header for a PDF
    res.setHeader('Content-Type', 'application/pdf')

    // Pipe the file stream to the response
    fileStream.pipe(res)

    // Handle errors during the streaming
    fileStream.on('error', error => {
      res.status(500).json({ error: 'Error streaming the file' })
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
>>>>>>> 696deb1867916e950a79b0d0a3cb6ec87d7b18f3
  }
}
