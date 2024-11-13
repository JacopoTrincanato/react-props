//importo la card
import Card from "./card/Card"

//importo l'array di post
import posts from "../data/posts"

//creo il componente main
export default function AppMain() {


    //eseguo il return
    return (
        <main>
            {posts.map(post => <Card key={post.id} post={post} />)}
        </main>

    )
}