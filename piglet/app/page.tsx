import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>piglet</h1>
            <p><Link href='/flashcards'>Flashcards</Link></p>
            <p><Link href='/checklist'>Checklist</Link></p>
            <p><Link href='/music'>Music</Link></p>
            <p><Link href='/usefulLinks'>Resources</Link></p>
        </main>
    )
}