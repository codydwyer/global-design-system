import { customAlphabet } from 'nanoid';

const generateId = () => {
  const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 8);
  return nanoid();
};

export default generateId;
