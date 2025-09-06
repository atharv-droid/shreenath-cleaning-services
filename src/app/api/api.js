// lib/axiosFetcher.js
import crypto from "crypto";
import axios from "axios";
// export function encryptSecretKey(secret, key, iv) {
//   // secret: string to encrypt
//   // key: Buffer or string (32 bytes for aes-256)
//   // iv: Buffer or string (16 bytes for aes-256-cbc)
//   const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
//   let encrypted = cipher.update(secret, "utf8", "base64");
//   encrypted += cipher.final("base64");
//   return encrypted;
// }
export function decryptSecretKey(encrypted, key, iv) {
  // encrypted: base64 string
  // key: Buffer or string (32 bytes for aes-256)
  // iv: Buffer or string (16 bytes for aes-256-cbc)
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://atharv-droid.github.io/shreenath-cleaning-services-data/APIData/", // Optional: set your API base
  headers: {
    "Content-Type": "application/json",
  },
});

const testimonialsAxiosInstance = axios.create({
  headers: {
    baseURL: "https://api.shapo.io/testimonials",
    "Content-Type": "application/json",
    //authorization: `Bearer 64787f2e-46a8-47e6-9187-6a3ec48de1c0`, // Optional: set your API key
    authorization: `Bearer ${decryptSecretKey(
      "LTGheEyLKX94LyE29wLccapjaRfkoFkwcPs9HylbZCpPSblfcbJRgtoF2UJe3/bQ",
      "114d856e0136b421776dd7ad741cd7f0",
      "56b42166dec4afsa"
    )}`, // Optional: set your API key
  },
  params: {
    size: 1,
  },
});

// Optional: Interceptors for auth or logging
// axiosInstance.interceptors.request.use(config => {
//   config.headers.Authorization = `Bearer ${yourToken}`;
//   return config;
// });

export const fetchData = async (url, options = {}) => {
  try {
    const response = await axiosInstance({
      url,
      method: options.method || "GET",
      ...options,
    });
    // console.log(`Axios response [${url}]:`, response.data);

    return response.data;
  } catch (error) {
    console.error(`Axios error [${url}]:`, error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const getTestimonials = async (url, options = {}) => {
  try {
    const response = await testimonialsAxiosInstance({
      url,
      method: options.method || "GET",
      ...options,
    });
    // console.log(`Axios response [${url}]:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Axios error [${url}]:`, error.message);
    throw error.response?.data || { message: "Something went wrong" };
  }
};
