import { message } from 'antd';
import { useState } from 'react';

const FileHashCalculator = () => {
  const [hash, setHash] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setHash(null);
    setProgress(0);

    if (file) {
      calculateHash(file);
    }
  };

  const calculateHash = (file) => {
    const chunkSize = 700 * 1024 * 1024;
    const chunks = Math.ceil(file.size / chunkSize);
    let currentChunk = 0;
    const fileReader = new FileReader();

    const processChunk = () => {
      const start = currentChunk * chunkSize;
      const end = Math.min(start + chunkSize, file.size);

      const blob = file.slice(start, end);
      fileReader.readAsArrayBuffer(blob);
    };

    fileReader.onload = (e) => {
      const arrayBuffer = e.target.result;
      crypto.subtle.digest('SHA-256', arrayBuffer).then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
          .map((byte) => byte.toString(16).padStart(2, '0'))
          .join('');
        setHash(hashHex);

        currentChunk++;
        const currentProgress = (currentChunk / chunks) * 100;
        setProgress(currentProgress);

        if (currentChunk < chunks) {
          processChunk();
        }
      });
    };

    fileReader.onerror = () => {
      // Handle errors
      message.error('Error reading file');
    };

    processChunk();
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {progress > 0 && progress < 100 && (
        <div>
          <progress value={progress} max={100} />
          <div>Progress: {progress.toFixed(2)}%</div>
        </div>
      )}
      {hash && <div>Merkle Root Hash: {hash}</div>}
    </div>
  );
};

export default FileHashCalculator;
