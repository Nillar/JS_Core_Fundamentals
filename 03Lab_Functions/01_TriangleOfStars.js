function drawTriangle(n) {

    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }

    for (let i = 1; i < n; i++) {
        console.log("*".repeat(n - i));
    }
}

drawTriangle(5);