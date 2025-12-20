const ImageFormat = ({ src, alt, className = '', crop = false }) => {
  const basicStyle = 'w-65 h-50 object-cover rounded-xs mx-3';

  // If crop is true, allow this image's wrapper to shrink (so it will be cropped)
  // while keeping the image itself at the intended size. The wrapper hides overflow.
  if (crop) {
    return (
      <div className={`overflow-hidden min-w-0 ${className}`} style={{ flex: '1 1 0%' }}>
        <img src={src} alt={alt} className="w-40 h-50 object-cover" />
      </div>
    );
  }

  return (
    <div style={{ flex: '0 0 auto' }}>
      <img src={src} alt={alt} className={`${basicStyle} ${className}`} />
    </div>
  );
};

export default ImageFormat;
