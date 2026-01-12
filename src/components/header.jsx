import UserData from "./userData";

export default function Header() {
    return (
        <header>
            <h1>Welcome to Our Store</h1>
            <div>
                <UserData name="John Doe" email=""/>
                <h3>Store Logo</h3>
                <p>Your one-stop shop for all your needs</p>
            </div>
        </header>
    )
}