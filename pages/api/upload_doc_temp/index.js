import { IncomingForm } from 'formidable';
import mv from 'mv';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error parsing form data.' });

      return;
    }

    const newFilename = fields.newFilename[0]; // รับค่า documentName
    const subjectType = fields.subjectType;

    // console.log('ประยวยหัวพญาครุท', fields.docType[0])

    var oldPath = files.file[0].filepath;
    var newPath = `public/Document/Doctemp/${subjectType}/${newFilename}`;
    console.log(newPath);
    mv(oldPath, newPath, function (err) {
      if (err) {
        res.status(500).json({ error: 'Error moving file.' });

        return;
      }

      res.status(200).json({ message: 'File moved successfully.' });
    });
  });
};
