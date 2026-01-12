import UserData from "./userData";

export default function Header() {
    return (
        <header className="w-full h-30 bg-accent">
            
            <div>
                <UserData name="John Doe" email=""/>
                <h3>Store Logo</h3>
                
            </div>
        </header>
    )
}