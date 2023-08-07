import { Accept } from 'react-dropzone';
import { FILE_FORMATS } from './constants';

export function numberRange(len: number) {
  return Array.from({ length: len }, (_, i) => i + 1);
}

// Native types can be found in the following link:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
export const acceptedFileExtensionsListGenerator = (
  extensions: FileExtensions[],
) => {
  return extensions.reduce((acc, curr) => {
    if (FILE_FORMATS[curr]) {
      acc[curr] = FILE_FORMATS[curr];
    }
    return acc;
  }, {} as FileFormats);
};
