export default function fileToBase64(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result
        ?.toString()
        ?.replace(/^data:.+;base64,/, '');
      if (base64String) {
        resolve(base64String);
      } else {
        reject(new Error('Failed to convert file to base64 string.'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
