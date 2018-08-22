function login() {
    const user = $("#user").val();
    const pwd = $("#password").val();
    if(!user || !pwd) {
        $("#loginAlert").css({ display: "block" });
    } else {
        $("#loginAlert").css({ display: "none" });
    }
}