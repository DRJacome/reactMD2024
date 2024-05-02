import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

export function App() {
    const users = [
        {
            username: "midudev",
            name: "Miguel Ángel Durán",
            isFollowing: true,
            id: "312",
        },
        {
            username: "pheralb",
            name: "Pablo Hernández",
            isFollowing: false,
            id: "1324",
        },
        {
            username: "PacoHdezs",
            name: "Paco Hdez",
            isFollowing: true,
            id: "5432",
        },
        {
            username: "TMchein",
            name: "Tomás",
            isFollowing: false,
            id: "542",
        },
    ];
    return (
        <section className='App'>
            {users.map(({ id, username, name, isFollowing }) => (
                <TwitterFollowCard
                    key={id}
                    userName={username}
                    initialIsFollowing={isFollowing}>
                    {name}
                </TwitterFollowCard>
            ))}
        </section>
    );
}
