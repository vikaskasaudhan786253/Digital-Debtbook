function Backup() {
    const createBackup = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/backup`
            );

            await response.json();
            alert("Backup Created");
        } catch (error) {
            console.error(error);
            alert("Server Error");
        }
    };

    const restoreBackup = async () => {
        try {
            const response = await fetch(
                "http://127.0.0.1:5000/restore"
            );

            await response.json();
            alert("Backup Restored");
        } catch (error) {
            console.error(error);
            alert("Server Error");
        }
    };

    return (
        <div>
            <h1>Backup Manager</h1>

            <button onClick={createBackup}>
                Create Backup
            </button>

            <br />
            <br />

            <button onClick={restoreBackup}>
                Restore Backup
            </button>
        </div>
    );
}

export default Backup;
