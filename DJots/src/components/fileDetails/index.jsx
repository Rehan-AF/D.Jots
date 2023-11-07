import { useState } from 'react';

const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileName = file.name;
      const fileSize = file.size;
      const lastModified = file.lastModified;
      const lastModifiedDate = new Date(lastModified).toLocaleString();
      console.log('File Name:', fileName);
      console.log('File Size:', fileSize, 'bytes');
      console.log('Last Modified:', lastModifiedDate);

      setSelectedFile(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <h2>Selected File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Size: {selectedFile.size} bytes</p>
          <p>
            Last Modified:{' '}
            {new Date(selectedFile.lastModified).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileInput;
