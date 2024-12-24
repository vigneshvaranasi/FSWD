type statusProps = {
    status: "Loading" | "Success" | "error"
}

function Status(props: statusProps) {
    let message;
    if(props.status === "Loading"){
        message = "Loading..."
    }
    else if(props.status === "Success"){
        message = "Data Fetched Successfully"
    }
    else if(props.status === "error"){
        message = "Failed to Fetch Data"
    }
    return (
        <div>
            <h2>Status : {message}</h2>
        </div>

    )
}

export default Status