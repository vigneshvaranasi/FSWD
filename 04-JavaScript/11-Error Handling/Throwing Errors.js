try {
    let a = 9 / 0;
    console.log(a); // Infinity
    if (!isFinite(a)) {
        throw new Error("Division by zero");
    }
} catch (error) {
    console.log(error.message); // Division by zero
}
