import { useState } from 'react';
import { message } from 'antd';

const FileHasher = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [hashResult, setHashResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setProgress(0);
  };

  const handleHashFile = async () => {
    if (selectedFile) {
      try {
        setLoading(true);
        setProgress(0);
        const fileData = await readFile(selectedFile, (event) => {
          if (event.lengthComputable) {
            const percent = (event.loaded / event.total) * 100;
            setProgress(percent);
          }
        });
        const fileHash = await hashFile(fileData);
        setHashResult(fileHash);
      } catch (error) {
        message.error('Error hashing file:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const readFile = (file, onProgress) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.onprogress = onProgress;
      reader.readAsArrayBuffer(file);
    });
  };

  const hashFile = async (fileData) => {
    const buffer = await crypto.subtle.digest('SHA-256', fileData);
    const hashArray = Array.from(new Uint8Array(buffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  };

  return (
    <div>
      <h2>File Hasher</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleHashFile} disabled={loading}>
        Hash File
      </button>

      {loading && <p>Loading...</p>}

      {progress > 0 && progress < 100 && (
        <div>
          <p>Progress: {progress.toFixed(2)}%</p>
          <progress value={progress} max="100" />
        </div>
      )}

      {hashResult && (
        <div>
          <h3>Hash Result:</h3>
          <p>{hashResult}</p>
        </div>
      )}
    </div>
  );
};

export default FileHasher;
