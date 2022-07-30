import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToAsyncStorage = async ({ key, value }) => {
  //   await AsyncStorage.clear();
  try {
    AsyncStorage.setItem(key,value)
    const result = await getAsyncStorageObject({ key });
    if (result === null) {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      result.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(result));
    }

    if (result instanceof Error) {
      throw new Error(`something went wrong while adding key: ${key}`);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getAsyncStorageObject = async ({ key }) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log("DATAAAAAAAAA: "+JSON.parse(value))
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};

