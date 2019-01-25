import axios from "axios";

/** get userList from jsonplaceholder
 * @returns userList
 */
async function getUsersFromJsonPlaceholder() {
  try {
    const userResponce = await axios.get("https://jsonplaceholder.typicode.com/users");
    return  userResponce.data.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        website: user.website,
        username: user.username
      };
    });
  } catch (error) {
    console.error('error while users loading', error);
  }
    
  }

export default getUsersFromJsonPlaceholder;