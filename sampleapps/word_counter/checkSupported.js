let isUnsupported = () => {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    return false;
  }
  alert('File APIに未対応です');
  return true;
};
