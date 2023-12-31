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
      className="flex flex-col items-center justify-center border-dashed border-2 border-secondary hover:border-accent focus:border-accent rounded-md cursor-pointer py-8 px-48 w-full"
      {...getRootProps()}
    >
      {file ? (
        <div className="flex flex-col items-center justify-around h-full w-full">
          <span className="text-lg font-semibold w-max">{file.name}</span>
          <span className="text-sm text-center w-max">
            Select a different file?
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-around h-full w-full">
          <input {...getInputProps()} />
          {isDragActive ? (
            <span className="text-lg text-center w-max">Here! Here!</span>
          ) : (
            <span className="text-lg text-center w-max">
              Select or drop your file
            </span>
          )}
        </div>
      )}
    </div>
  );
}
