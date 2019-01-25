import axios from "axios";

/** get postsList from jsonplaceholder
 * @returns postList
 */
async function getPostsFromJsonPlaceholder() {
    try {
        const responce = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return responce.data.map(post => {
            return {
                userId: post.userId,
                id: post.id,
                title: post.title,
                body: post.body
            };
        });
    } catch (error) {
        console.error('error while posts loading', error);
    }

}

export default getPostsFromJsonPlaceholder;