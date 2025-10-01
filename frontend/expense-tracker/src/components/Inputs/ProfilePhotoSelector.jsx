// src/components/Inputs/ProfilePhotoSelector.jsx
import React, { useRef, useState, useEffect } from "react";
import { FiUser, FiUpload } from "react-icons/fi";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const openPicker = () => inputRef.current?.click();

  const clearImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="relative inline-block h-24 w-24">
      {/* soft background circle */}
      <div className="absolute inset-0 rounded-full bg-blue-100" />

      {/* avatar circle (click to upload) */}
      <button
        type="button"
        onClick={openPicker}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   h-16 w-16 rounded-full bg-blue-200 grid place-items-center
                   overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Choose profile photo"
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Profile preview"
            className="h-full w-full object-cover"
          />
        ) : (
          <FiUser className="text-blue-700" size={26} />
        )}
      </button>

      {/* small upload fab at bottom-right */}
      <button
        type="button"
        onClick={openPicker}
        className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full
                   bg-blue-600 text-white grid place-items-center shadow
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Upload"
        title={image ? "Change photo" : "Upload photo"}
      >
        <FiUpload size={16} />
      </button>

      {/* hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      {/* optional small 'Remove' text (hide if no image) */}
      {image && (
        <button
          type="button"
          onClick={clearImage}
          className="block mx-auto mt-2 text-[11px] text-slate-500 hover:underline"
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
