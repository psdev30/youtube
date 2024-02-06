import {httpsCallable } from 'firebase/functions';
import { functions } from './firebase';

const generateUploadUrlFunction = httpsCallable(functions, 'generateUploadUrl');

export async function uploadVideo(file: File) {
  console.log(file)
  const response: any = await generateUploadUrlFunction({
    fileExtension: file.name.split('.').pop(),
    fileName: file.name.split('.')[0]
  });

  // Upload the file to the signed URL
  const uploadResult = await fetch(response?.data?.url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
  });

  return uploadResult;
}

const getVideosFunction = httpsCallable(functions, 'getVideos');

export interface Video {
  id?: string;
  uid?: string;
  filename?: string;
  status?: 'processing' | 'processed';
  title?: string;
  description?: string;
}

export async function getVideos() {
  const response: any = await getVideosFunction();
  return response.data as Video[];
}
