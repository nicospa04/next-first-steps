import { Metadata } from "next"

export const metadata:Metadata = {
    title: "Contact",
    description: "This is the contact page",
    keywords: ["contact", "email", "phone", "address"]
}

export default function ContactPage() {
    return (
        <>
            <h1>Contact</h1>
            <p>This is the contact page</p>
        </>
    )
}