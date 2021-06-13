import json from './parser';
import read from './reader';

// TODO: write your code here
export default class GameSavingLoader {
  static async load() {
    //        const data = read(); // возвращается Promise!
    //        const value = json(data); // возвращается Promise!

    try {
      const data = await read();
      const value = await json(data);
      return value;
    } catch (error) {
      throw new Error(error);
    }
    /*
    return new Promise((resolve, reject) => {
      resolve(read());
      reject(new Error('Error'));
    }).then((data) => json(data));
*/
  }
}
