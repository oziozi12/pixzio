import React, { useState, useRef } from 'react';

const BackgroundRemover: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeBackground = () => {
    if (image) {
      // Simulate background removal
      setProcessedImage(image);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Background Remover</h1>

      <div className="flex justify-center mb-4">
  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    ref={fileInputRef}
  />
</div>

      {image && (
        <div className="mb-4">
          <img src={image} alt="Original" className="w-full max-w-md h-auto" />
          <button
            onClick={removeBackground}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Remove Background
          </button>
        </div>
      )}

      {processedImage && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Processed Image</h2>
          <img src={processedImage} alt="Processed" className="w-full max-w-md h-auto" />
        </div>
      )}
    </div>
  );
};

export default BackgroundRemover;