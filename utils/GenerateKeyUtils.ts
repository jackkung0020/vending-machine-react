/* eslint-disable import/no-anonymous-default-export */
import { v4 as uuidv4 } from 'uuid';

export interface IGenerateKey {
  generateKey?: string | number
}

function generateKeys(data: any): any {
  return data.map((item: any) => ({
    ...item,
    generateKey: uuidv4(),
  }));
}

function generateSingleKey(): string {
  return uuidv4();
}

export default { generateKeys, generateSingleKey };
