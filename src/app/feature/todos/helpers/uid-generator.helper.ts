/**
 * Generates a random UID consisting of 11 alphanumeric characters.
 * The UID includes uppercase letters, lowercase letters, and digits.
 *
 * @returns {string} A randomly generated 11-character UID.
 */
export function generateUID(): string {
    // Define the characters that can be used in the UID
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Initialize the UID as an empty string
    let uid = '';

    // Loop 11 times to generate an 11-character UID
    for (let i = 0; i < 11; i++) {
        // Generate a random index to pick a character from 'chars'
        const randomIndex = Math.floor(Math.random() * chars.length);

        // Append the randomly selected character to the UID
        uid += chars[randomIndex];
    }

    // Return the generated UID
    return uid;
}

// Example usage:
// const uid = generateUID();
// console.log(uid); // Outputs something like 'a1BcD3eFgHi'
