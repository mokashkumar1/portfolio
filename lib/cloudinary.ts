import { v2 as cloudinary } from "cloudinary";

export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
};

if (cloudinaryConfig.cloudName && cloudinaryConfig.apiKey && cloudinaryConfig.apiSecret) {
  cloudinary.config({
    cloud_name: cloudinaryConfig.cloudName,
    api_key: cloudinaryConfig.apiKey,
    api_secret: cloudinaryConfig.apiSecret,
    secure: true,
  });
}

export function cloudinaryImage(publicId: string, width = 1200) {
  if (!cloudinaryConfig.cloudName || !publicId) return "";
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}

export { cloudinary };
