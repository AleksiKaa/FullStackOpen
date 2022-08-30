const Notification = ({ msg, type }) => {
    if (msg === null) return null

    if (type === "notification") {
        return (
            <div className="notification">
                {msg}
            </div>
        )
    }

    return (
        <div className="error">
            {msg}
        </div>
    )

}

export default Notification