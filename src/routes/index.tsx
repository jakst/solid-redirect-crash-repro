import { createAsync, redirect } from "@solidjs/router"

const FORCE_REDIRECT = true

async function getData() {
	"use server"

	if (FORCE_REDIRECT) throw redirect("/login")
	return { id: "abc123" }
}

export default function App() {
	const item = createAsync(() => getData())

	return (
		<main>
			<h1>Hello world!</h1>
			{item()?.id}
		</main>
	)
}
