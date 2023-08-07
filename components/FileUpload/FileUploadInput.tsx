import React, { useCallback } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { acceptedFileExtensionsListGenerator } from '../../utils/generators';

type IFileUploadInput = {
  file: File | null;
  handleFile: (files: File | null) => void;
  handleError?: () => void;
  acceptedExtensions?: FileExtensions[];
  onDropFuncCall?: () => void;
  onViewFile?: (file: File) => void;
};

export default function FileUploadInput({
  file,
  handleFile,
  handleError,
  acceptedExtensions,
  onDropFuncCall,
  onViewFile,
}: IFileUploadInput) {
  const handleDrop = useCallback(
    (acceptedFiles: any, rejectedFiles: FileRejection[]) => {
      if (rejectedFiles.length > 0 && handleError) handleError();
      if (acceptedFiles.length === 1) {
        handleFile(acceptedFiles[0]);
      }
      if (onDropFuncCall) onDropFuncCall();
    },
    [handleFile, handleError, onDropFuncCall],
  );
  const handleDeleteFile = useCallback(() => handleFile(null), [handleFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept:
      acceptedExtensions &&
      // TODO: fix typings
      (acceptedFileExtensionsListGenerator(acceptedExtensions) as any),
  });

  return (
    <div
      className="border-dashed border-2 border-secondary hover:border-accent focus:border-accent rounded-md cursor-pointer py-8 px-48 w-full"
      {...getRootProps()}
    >
      {file ? (
        <div className="flex flex-col items-center justify-around h-full w-full ">
          <span className="text-lg font-semibold">{file.name}</span>
          <span className="text-sm">Select another file?</span>
        </div>
      ) : (
        <div>
          <div className="flex flex-row items-center justify-center w-full h-full">
            <input {...getInputProps()} />
            {isDragActive ? (
              <span className="text-lg">Here! Here!</span>
            ) : (
              <span className="text-lg">
                <span className="text-lg">Select or drop your file</span>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
