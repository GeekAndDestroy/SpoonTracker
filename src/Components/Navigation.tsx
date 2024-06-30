

type NavigationProps = {    
        isLoggedIn: boolean,
        logUserOut: () => void,
}

export default function Navigation({ isLoggedIn }: NavigationProps) {
    return (
        <div>Navigation</div>
    )
}