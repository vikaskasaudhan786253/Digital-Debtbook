function Navbar() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div>
            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
}

export default Navbar;
