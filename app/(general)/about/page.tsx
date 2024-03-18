import { Metadata } from "next"

export const metadata:Metadata = {
    title: "About",
    description: "This is the about page",
    keywords: ["about", "us", "our", "company"]
}


export default function AboutPage() {
    return (
        <span className="text-7xl">About page</span>
    )
}