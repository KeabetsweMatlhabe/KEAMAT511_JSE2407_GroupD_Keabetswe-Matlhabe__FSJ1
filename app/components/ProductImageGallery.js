import { useState } from 'react';
import Image from 'next/image';

export default function ProductImageGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      <div className="aspect-w-1 aspect-h-1 relative mb-4">
        <Image
          src={images[currentImage]}
          alt="Product"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-20 h-20 relative ${index === currentImage ? 'border-2 border-blue-500' : ''}`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}